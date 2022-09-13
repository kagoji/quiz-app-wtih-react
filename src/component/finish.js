import { Link } from "react-router-dom";
import welcomeImg from "../assets/img/UI-MyBL-helicopter_Gif.gif";
import { useEffect, useState } from "react";

const Finish = () => {

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
    if (participateData) {
      let tempData = await JSON.parse(participateData);
      console.log('paa',tempData)
      setParticipate(tempData);
    //   const win =
    //     tempData && tempData.isQuizComplete
    //       ? setAlreadyPlayed(true)
    //       : (window.location.href = "/welcome");

      // if(tempData && tempData.isQuizComplete){
      //   setResError('You have already participated.');
      //   setAlreadyPlayed(true);
      // }else if(participate && participate.msisdn){
      //   window.location.href='/quiz'
      // }
    }
    else window.location.href='/welcome'
  };
  console.log('paa2',participate)
  return (
    <>
    { participate && participate.paritcipate_name ? 
      <>
      <div className="welcomeWrap">
          <div className="welcomeInner">
              <div className="welcomeImg">
              <img src={welcomeImg} alt="welcomeImg" className="img-fluid" />
            </div>
          </div>
          <div className="welcomeContent">
            <h6>ধন্যবাদ !</h6>
            <h2 className="secTitle">{participate.paritcipate_name}</h2>
            <p className="secPara">
              আপনার উত্তরগুলো সফলভাবে জমা দেওয়া হয়েছে। আপনি বিজয়ী হলে আমরা যথাসময়ে আপনাকে জানাব।
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
      </>:<></>
  }
      
    </>
  );
};

export default Finish;
