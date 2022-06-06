import React, { useState } from "react";
import axios from "axios";

const FetchJob = () => {
  const [job, setJob] = useState([]);

  const url = "http://refertest.pythonanywhere.com/job/openings";

  const fetchJob = async () => {
    try {
      const response = await axios.get(url);
      setJob(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-3">
            <button className="btn btn-primary" onClick={fetchJob}>
              Fetch Jobs &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          {job.map((value) => {
            return (
              <div className="col-3">
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title">{`Company Name: ${value.company}`}</h5>
                    <p className="card-text">{`Designation: ${value.designation}`}</p>
                    <p className="card-text">{`Job Location: ${value.location}`}</p>
                    <p className="card-text">
                      {`Min Experience: ${value.min_experience}`}
                    </p>
                    <p className="card-text">{`Skills required: ${value.skills + " "
                      }`}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchJob;
