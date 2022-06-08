import React from "react";
import FetchJob from "./components/FetchJob";
import FetchUser from "./components/FetchUser";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="app">
        {/* <div className='App'> */}
        <FetchJob className="fetchJob" />
        <div class="rotating">
          <div className="insideRotate"></div>
        </div>
        <FetchUser className="fetchUser" />
        {/* </div> */}
        <footer>Built with ❤️ by Sohail</footer>
      </div>
    </div>
  );
};

export default App;
