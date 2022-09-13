import React from "react";
import { Link } from "react-router-dom";
import helicopter from "../assets/img/helicopter.svg";

const Home = () => {
  return (
    <div className="Home">
      <Link to={"/login"}>
        <div className="btn btnReg">
          <div className="icon">
            <img src={helicopter} alt="helicopter" />
          </div>
          {/* <div className="text">GO TO REGISTRATION</div> */}
          <div className="text">রেজিস্ট্রেশন করুন</div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
