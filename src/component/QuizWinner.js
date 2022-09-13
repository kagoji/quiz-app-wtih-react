import React from "react";
import { Link } from "react-router-dom";
import winnerImg from "../img/winner.gif";
import quizBg from "../../src/assets/img/quizBg.png";

const QuizWinner = (participateData) => {
  //console.log('WP',participateData.participate.participate_name);
  console.log('WP',participateData.participate);
  //console.log('WP2',participateData.participate.msisdn);
  return (
    <>
      <div className="UserLoginWrap">
        <div className="quizWinner">
          <img src={winnerImg} className="img-fluid" alt="Logo" />
        </div>
        <div className="text-center Winner p-5">
          <h1>Congratulations!</h1>
          <h5>{participateData.participate.paritcipate_name}</h5>
          {/* <h6 className="text-athens-gray">
            Your prize will be reached to your mobile number within one week.
          </h6> */}
          <h6 className="text-athens-gray">
            <b>Total Participation:</b> {participateData.participate.user_id}
          </h6>
          <h6 className="text-athens-gray">
            <b>Total Question:</b> {participateData.participate.result.totalQuestion}
          </h6>
          <h6>
            <b>Total Answered:</b> {participateData.participate.result.totalGiven??""}
          </h6>
          <h6>
            <b>Right Answered:</b> {participateData.participate.result.totalRight??""}
          </h6>
          <h6>
            <b>Wrong Answered:</b> {participateData.participate.result.totalWrong??""}
          </h6>
          <h6>
            <b>Total Earned:</b> {participateData.participate.result.totalPoint??""}
          </h6>
        </div>

        <div className="topBgImg">
          <img className="img-fluid" src={quizBg} alt="img" />
        </div>
      </div>
    </>
  );
};

export default QuizWinner;
