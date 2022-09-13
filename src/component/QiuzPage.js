import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import QuizWinner from "./QuizWinner";

import rightAngle from "../assets/img/right-angle.svg";
import englishToBanglaConvert from "../utils/banglaConvert";

const QiuzPage = () => {
  const [isAnsRight, setIsAnsRight] = useState(false);
  const [isAnsWrong, setIsAnsWrong] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [participate, setParticipate] = useState(null);
  const [allQuizQuestion, setAllQuizQuestion] = useState([]);
  const [allQuizAnswer, setAllQuizAnswer] = useState([]);
  const [userTemAns, setUserTempAns] = useState(null);
  const [paginate, setPaginate] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const [totalGiven, setTotalGiven] = useState(0);
  const [totalRight, setTotalRight] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);

  useEffect(() => {
    getParticipateInfo();
    console.log("use1");
  }, []);

  useEffect(() => {
    getAllQuestion();
    console.log("use2");
  }, [participate]);

  useEffect(() => {
    totalGiven > 0 && winnerCheck();
    console.log("use3");
  }, [totalGiven]);

  //ParticipateInfo
  const getParticipateInfo = async () => {
    const participateData = localStorage.getItem("participateInfo");
    if (participateData) {
      let tempData = await JSON.parse(participateData);
      const win =
        tempData && tempData.isQuizComplete
          ? (window.location.href = "/played")
          : "";
      setParticipate(tempData);
    } else window.location.href = "/login";
  };

  const participateInfo = () => {
    const participateData = localStorage.getItem("participateInfo");
    if (participateData) {
      let tempData = JSON.parse(participateData);
      return tempData;
    }
  };

  const storeUserAnser = useCallback(
    (id, option) => {
      setUserTempAns({
        id,
        given: option,
      });
    },
    [userTemAns]
  );

  const storData = useCallback(
    (item, i, allQuizQuestion) => {
      //console.log('QC',allQuizQuestion.length);

      const rightOption = allQuizQuestion[paginate].correct;
      setTotalGiven(totalGiven + 1);
      const tempAns =
        allQuizAnswer && allQuizAnswer.length > 0 ? allQuizAnswer : [];

      tempAns.push(item);
      setAllQuizAnswer(tempAns);
      if (parseInt(rightOption) == parseInt(item.given)) {
        setIsAnsRight(true);
        setIsAnsWrong(false);
        setTotalRight(totalRight + 1);
        setTotalPoint(totalPoint + parseInt(allQuizQuestion[paginate].point));
        //setPaginate(i + 1);
        showResult(i);
      } else {
        setIsAnsWrong(true);
        setIsAnsRight(false);
        setTotalWrong(totalWrong + 1);
        //setPaginate(i + 1);
        showResult(i);
      }

      // if((totalGiven+1)==allQuizQuestion.length){

      //   // let totalQuestionCount = allQuizQuestion.length;
      //   // console.log('wwww',totalQuestionCount);
      //   // setTotalQuestion(totalQuestionCount);
      //   winner();
      // }else{
      //   showResult(i)
      // }

      ///console.log('Answer',JSON.stringify([item]));

      // Swal.fire({
      //   icon: `${isAnsRight ? `success` : "error"}`,
      //   title: `${isAnsRight ? "Right Answer" : "Wrong Answer"}`,
      //   showConfirmButton: false,
      //   timer: 2000,
      // });
    },
    [paginate]
  );
  console.log("p@@@", participate);
  console.log("totalQuestion", totalQuestion);
  //winner
  const winnerCheck = async () => {
    console.log("totalGiven", totalGiven);
    console.log("totalQuestion", totalQuestion);

    if (totalGiven == totalQuestion) {
      const participateData = participateInfo();

      console.log("participateInfo", participateData);
      console.log("totalQuestion", totalQuestion);
      setIsAnsWrong(false);
      setIsAnsRight(false);
      participateData.isQuizComplete = true;
      participateData.result = {
        totalQuestion: totalQuestion,
        totalGiven: totalGiven,
        totalRight: totalRight,
        totalWrong: totalWrong,
        totalPoint: totalPoint,
      };
      console.log("participateInfoUP", participateData);
      localStorage.setItem("participateInfo", JSON.stringify(participateData));

      await curlAnswerSubmit();

      setParticipate(participateData);
      //
    }
  };

  //resultShow
  const showResult = async (i) => {
    console.log("start");
    const timer = await setTimeout(() => {
      setPaginate(i + 1);
      setIsAnsWrong(false);
      setIsAnsRight(false);
    }, 500);
    console.log("clear");
    //totalQuestion>0 && winnerCheck();
    return () => clearTimeout(timer);
    //setPaginate(i + 1);
  };

  //AllQuestion
  const getAllQuestion = async () => {
    //console.log("KKQ", participate);
    const getQuestionData = localStorage.getItem("all_quiz_question");

    if (getQuestionData) {
      const tempData = await JSON.parse(getQuestionData);
      setAllQuizQuestion(tempData);
      let totalQuestionCount = tempData.length;
      setTotalQuestion(totalQuestionCount);
      console.log("Store", tempData);
      //getQuizData(quizCounter);
    } else {
      participate && participate.access_token && curlQuestion();
    }
  };

  //QuestionAPI
  const curlQuestion = async () => {
    const config = {
      method: "post",
      url: process.env.REACT_APP_API_URL + "/api/web/v2/quiz/get-all-question",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + participate.access_token ?? "",
      },
    };
    await axios(config)
      .then(function (response) {
        if (response.data.data.all_quiz_question.length > 0) {
          setAllQuizQuestion(response.data.data.all_quiz_question);
          localStorage.setItem(
            "all_quiz_question",
            JSON.stringify(response.data.data.all_quiz_question)
          );

          let totalQuestionCount = response.data.data.all_quiz_question.length;
          setTotalQuestion(totalQuestionCount);
          // console.log("livQ", response.data);
          //getQuizData(quizCounter);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //AnswerSubmit
  const curlAnswerSubmit = async () => {
    const ans_body = {};
    ans_body.msisdn = participate.msisdn;
    ans_body.all_auiz_answer = allQuizAnswer;

    console.log("ans_body", ans_body);

    const config = {
      method: "post",
      url: process.env.REACT_APP_API_URL + "/api/web/v2/quiz/get-answer",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + participate.access_token ?? "",
      },
      data: ans_body,
    };
    await axios(config)
      .then(function (response) {
        console.log("livAns", response.data);
        window.location.href = "/finish";
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //console.log('inn',getQuizContent);
  //console.log('innALL',allQuizQuestion);
  //console.log('AllAnswer',allQuizAnswer);
  // console.log('totalRight',totalRight);
  // console.log('isAnsRight',isAnsRight);
  // console.log('isAnsWrong',isAnsWrong);
  // console.log('totalGiven',totalGiven);
  // console.log('totalPoint',totalPoint);
  return (
    <>
      {isWinner ? (
        <QuizWinner participate={participate} />
      ) : (
        <>
          {allQuizQuestion.length > 0 && allQuizQuestion[paginate].id ? (
            <div
              className="quizCategaryWrap"
              key={allQuizQuestion[paginate].id}
            >
              <div className="quizCategaryContent">
                <div className="quizMainBody">
                  <div className="banner">
                    {/* <div className="bannerContent">
                      <h3 className="bsubTitle">Fastest way to</h3>
                      <h2 className="bhomeTitle">Padma Bridge</h2>
                    </div> */}
                  </div>
                  <div className="quizContent">
                    <h2 className="secTitle">প্রশ্ন</h2>
                    <p className="secPara">
                      অনুগ্রহপূর্বক কুইজের পাঁচটি প্রশ্নের সঠিক উত্তর দিন
                    </p>
                    <div className="questionCounter">
                      <ul>
                        <li
                          className={
                            paginate === 0
                              ? "current"
                              : paginate > 0
                              ? "complate"
                              : ""
                          }
                        >
                          ১
                        </li>
                        <li
                          className={
                            paginate === 1
                              ? "current"
                              : paginate > 1
                              ? "complate"
                              : ""
                          }
                        >
                          ২
                        </li>
                        <li
                          className={
                            paginate === 2
                              ? "current"
                              : paginate > 2
                              ? "complate"
                              : ""
                          }
                        >
                          ৩
                        </li>
                        <li
                          className={
                            paginate === 3
                              ? "current"
                              : paginate > 3
                              ? "complate"
                              : ""
                          }
                        >
                          ৪
                        </li>
                        <li
                          className={
                            paginate === 4
                              ? "current"
                              : paginate > 4
                              ? "complate"
                              : ""
                          }
                        >
                          ৫
                        </li>
                      </ul>
                      <div className="couter">
                        {englishToBanglaConvert(paginate + 1) ?? 0}/{englishToBanglaConvert(allQuizQuestion.length) ?? 0}
                      </div>
                    </div>
                  </div>

                  <div className="quistionContent">
                    <h2>
                      <span style={{ marginRight: "5px" }}>
                        {englishToBanglaConvert(paginate + 1) ?? 0}.{" "}
                      </span>
                      <span>{allQuizQuestion[paginate].question ?? ""}</span>
                    </h2>
                    <ul className="questionList">
                      {allQuizQuestion[paginate].answers.length > 0 &&
                        allQuizQuestion[paginate].answers.map((item, index) => (
                          <div className={`quizItem`} key={index}>
                            <input
                              type="radio"
                              name="quiz"
                              id={index}
                              value={index + 1}
                              onChange={() =>
                                storeUserAnser(
                                  allQuizQuestion[paginate].id,
                                  index + 1
                                )
                              }
                            />
                            <label htmlFor={index}>
                              <span> {item}</span>
                            </label>
                          </div>
                        ))}
                    </ul>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        {/* For Right Answer */}
                        {/* <div className="quizAnsWrap currectAns"> */}

                        {paginate === 4 ? (
                          userTemAns &&
                          userTemAns.id === allQuizQuestion[paginate].id &&
                          userTemAns.given ? (
                            <button
                              className="btn sendBtn"
                              style={{ paddingTop: "50px", width: "100%" }}
                              // onClick={()=> window.location.href = "/finish"}
                              onClick={() =>
                                storData(userTemAns, paginate, allQuizQuestion)
                              }
                            >
                              <div
                                className="btn btnReg"
                                style={{
                                  maxWidth: "310px",
                                  position: "static",
                                }}
                              >
                                <div className="text">সম্পন্ন করুন </div>
                              </div>
                            </button>
                          ) : (
                            <button
                              className="btn sendBtn"
                              style={{ paddingTop: "50px", width: "100%" }}
                              disabled
                            >
                              <div
                                className="btn btnReg"
                                style={{
                                  maxWidth: "310px",
                                  position: "static",
                                }}
                              >
                                <div className="text">সম্পন্ন করুন </div>
                              </div>
                            </button>
                          )
                        ) : (
                          <div className="quizAnsWrap currectAns">
                            {userTemAns &&
                            userTemAns.id === allQuizQuestion[paginate].id &&
                            userTemAns.given ? (
                              <button
                                className="btn sendBtn"
                                style={{ paddingTop: "50px", width: "100%" }}
                                onClick={() =>
                                  storData(
                                    userTemAns,
                                    paginate,
                                    allQuizQuestion
                                  )
                                }
                              >
                                <div
                                  className="btn btnReg"
                                  style={{
                                    maxWidth: "310px",
                                    position: "static",
                                  }}
                                >
                                  <div className="text">
                                    পরবর্তী{" "}
                                    <img src={rightAngle} alt="right angle" />{" "}
                                  </div>
                                </div>
                              </button>
                            ) : (
                              <button
                                className="btn sendBtn"
                                disabled
                                style={{ paddingTop: "50px", width: "100%" }}
                              >
                                <div
                                  className="btn btnReg"
                                  style={{
                                    maxWidth: "310px",
                                    position: "static",
                                  }}
                                >
                                  <div className="text">
                                    পরবর্তী{" "}
                                    <img src={rightAngle} alt="right angle" />{" "}
                                  </div>
                                </div>
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default QiuzPage;
