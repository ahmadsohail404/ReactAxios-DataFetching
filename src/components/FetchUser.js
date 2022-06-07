import React, { useState } from "react";
import axios from "axios";

const FetchUser = () => {
    const [user, setUser] = useState([]);

    const url = "http://refertest.pythonanywhere.com/user/data"

    const fetchUser = async () => {
        try {
            const response = await axios.get(url)
            // console.log(response);
            setUser(response.data.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="container my-3" key={user.id}>
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-primary" onClick={fetchUser}>
                            Fetch User Details &rarr;
                        </button>
                    </div>
                </div>
            </div>

            <div className="container my-3">
                <div className="row">
                    <div className="col-4 ">
                        <div className="card" >
                            <div className="card-body">
                                <img src={user.pictureUrl} className="card-img-top my-2" alt="" />
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.college}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FetchUser;
