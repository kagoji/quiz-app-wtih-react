import { Link } from "react-router-dom";
import welcomeImg from "../assets/img/UI-MyBL-helicopter_Gif.gif";
import helicopter from "../assets/img/helicopter.svg";
import { useEffect, useState } from "react";

const WelcomePage = () => {

    const [participate, setParticipate] = useState(null);
    const [alreadyPlayed, setAlreadyPlayed] = useState(false);
    
  useEffect(() => {
    getParticipateInfo();
    console.log("use1");
    //participate && participate.isQuizComplete ? setAlreadyPlayed(true):'';
  }, []);

  //ParticipateInfo
  const getParticipateInfo = async () => {
    const participateData = localStorage.getItem("participateInfo");
    console.log('Parti',participateData);
    if (participateData) {
      let tempData = await JSON.parse(participateData);
      setParticipate(tempData);
      console.log('Parti SET',participateData);
      if(tempData && tempData.isQuizComplete){
        window.location.href='/played'
      }
    }else window.location.href='/';
  };


  return (
    <>
      <div className="welcomeWrap">
        <div className="welcomeInner">
          <div className="welcomeImg">
            <img src={welcomeImg} alt="welcomeImg" className="img-fluid" />
          </div>
        </div>
        <div className="welcomeContent">
          <h6>স্বাগতম!</h6>
          <h2 className="secTitle">{participate && participate.paritcipate_name}</h2>
          <p className="secPara">
            কুইজ প্রতিযোগিতায় অংশগ্রহন করার জন্য ধন্যবাদ।
          </p>
          <p className="secPara">
            <b>মোট অংশগ্রহণকারী: {participate && participate.user_id}</b>
          </p>
        </div>
        <div className="startBtn">
          <Link to={"/quiz"}>
            <div className="btn btnReg">
              <div className="icon">
                <img src={helicopter} alt="helicopter" />
              </div>
              <div className="text">প্রতিযোগিতা শুরু করি</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
