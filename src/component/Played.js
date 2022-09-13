import { Link } from "react-router-dom";
import welcomeImg from "../assets/img/UI-MyBL-helicopter_Gif.gif";
import helicopter from "../assets/img/helicopter.svg";

const Played = ({message}) => {
  return (
    <>
      <div className="welcomeWrap">
        <div className="welcomeInner">
          <div className="welcomeImg">
            <img src={welcomeImg} alt="welcomeImg" className="img-fluid" />
          </div>
        </div>
        <div className="welcomeContent">
          <h6>দুঃখিত !</h6>
          {/* <h2 className="secTitle">{name??''}</h2> */}
          <p className="secPara">
            {message??"আপনি ইতিমধ্যে অংশগ্রহণ করেছেন"} !!
          </p>
          <p className="secPara">
            <b>বাংলালিংক এর সাথেই থাকুন ।</b>
          </p>
        </div>
        <div className="startBtn">
          <Link to={"/"} onClick={localStorage.clear()}>
            <div className="btn btnReg">
              <div className="text">হোম এ যান</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Played;
