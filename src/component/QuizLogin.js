import axios from "axios";
import { useState, useEffect } from "react";
import FormikControl from "./controls/FormikControl";
import Played from "./Played";
import { AutoTabProvider } from "react-auto-tab";
import helicopter from "../assets/img/helicopter.svg";
import getOperatorName from "../utils/system";
import { Link } from "react-router-dom";
import Popup from "./popup";
import TermsPopupOpen from "./TermsPopupOpen";

const QuizLogin = () => {
  const [resData, setResData] = useState([]);
  const [resError, setResError] = useState(null);
  const [pageType, setPageType] = useState("registration");
  const [otpNumber, setOtpNumber] = useState([]);
  const [otpData, setOtpData] = useState([]);
  const [participate, setParticipate] = useState(null);
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [numberValidate, setNumberValidate] = useState(false);
  const [numberValidateMessage, setNumberValidateMessage] = useState(null);
  const [genderValidate, setGenderValidate] = useState(false);
  const [genderValidateMessage, setGenderValidateMessage] = useState(null);
  const [ageValidate, setAgeValidate] = useState(false);
  const [ageValidateMessage, setAgeValidateMessage] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTermsOpen, setPopupTermsOpen] = useState(false)

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
      setParticipate(tempData);
      // const win =
      //   tempData && tempData.isQuizComplete
      //     ? setAlreadyPlayed(true)
      //     : (window.location.href = "/welcome");

      if (tempData && tempData.isQuizComplete) {
        setResError("You have already participated.");
        setAlreadyPlayed(true);
      } else if (participate && participate.msisdn) {
        window.location.href = "/welcome";
      }
    }
  };

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setResData({
      ...resData,
      [name]: value,
    });
    if (name === "mobile_number") {
      console.log("NNNNN");
      let validate = getOperatorName(value);
      if (validate !== "blink") {
        setNumberValidate(true);
        setNumberValidateMessage('অনুগ্রহপূর্বক ১১ সংখ্যার বাংলালিঙ্ক নাম্বার দিন');
      } else if(value.length !=11){
        setNumberValidate(true);
        setNumberValidateMessage('অনুগ্রহপূর্বক ১১ সংখ্যার বাংলালিঙ্ক নাম্বার দিন');
      }else{
        setNumberValidate(false);
        setNumberValidateMessage(null);
      } 
    }

    if (name === "gender") {
      setGenderValidate(false);
      setGenderValidateMessage(null);
    }

    if (name === "age_group") {
      setAgeValidate(false);
      setAgeValidateMessage(null);
    }
  };

  const onOTPHandleChange = (e) => {
    const { value, name } = e.target;
    console.log(value.substr(0, 1));
    setOtpData({
      ...otpData,
      [name]: value.substr(0, 1),
    });
    //setResError([]);
  };

  //Registration
  const onHandleSubmit = (e) => {
    e.preventDefault();

    console.log('submitData',resData);

    let valid= 0;

    let validate = getOperatorName(resData.mobile_number);
    //console.log('vv',validate);
    if (validate != "blink") {
      setNumberValidate(true);
      setNumberValidateMessage('অনুগ্রহপূর্বক ১১ সংখ্যার বাংলালিঙ্ক নাম্বার দিন');
      //return false;
      valid=1;
    } else if(resData.mobile_number.length !=11){
      setNumberValidate(true);
      setNumberValidateMessage('অনুগ্রহপূর্বক ১১ সংখ্যার বাংলালিঙ্ক নাম্বার দিন');
      //return false;
      valid=1;
    }
    
    if(!resData.gender){
      setGenderValidate(true);
      setGenderValidateMessage('লিঙ্গ তথ্য আবশ্যক');
      //return false;
      valid=1;
    }

    if(!resData.age_group){
      setAgeValidate(true);
      setAgeValidateMessage('বয়সের তথ্য আবশ্যক');
      //return false;
      valid=1;
    }

    if(valid==1)
      return false;
    
    const data = JSON.stringify({
      msisdn: resData.mobile_number,
      //paritcipate_name: resData.paritcipate_name,
      //gender: resData.gender,
      //age_group: resData.ageGroup,
    });
    //console.log(data);
    //setPageType("otp");
    const config = {
      method: "post",
      url: process.env.REACT_APP_API_URL + "/api/web/v2/auth/send-otp",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer f5522a5e4a2e7efd229edb7c8b3352b417084bb3|738323e2e4204db0c832dcac48a30b07",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //setResError([]);
        console.log(response.data);
        if (response.data.status) {
          setPageType("otp");
          setOtpNumber(resData.mobile_number);
        } else {
          //setResError(response.data.message);
          setResError(response.data.message);
          setAlreadyPlayed(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  

    

  };

  //OTP Verify
  const onOTPSubmit = (e) => {
    console.log("OTP SUB", resData);
    e.preventDefault();
    const data = JSON.stringify({
      msisdn: otpNumber,
      paritcipate_name: resData.paritcipate_name,
      gender: resData.gender,
      age_group: resData.age_group,
      otp_code: `${otpData.digit_1}${otpData.digit_2}${otpData.digit_3}${otpData.digit_4}`,
    });
    console.log(data);
    const config = {
      method: "post",
      url:
        process.env.REACT_APP_API_URL +
        "/api/web/v2/auth/otp-verification-registration",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer f5522a5e4a2e7efd229edb7c8b3352b417084bb3|738323e2e4204db0c832dcac48a30b07",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setResError([]);
        console.log(response.data, "otp-verification-registration");
        if (response.data.status) {
          setPageType("quiz");
          localStorage.setItem(
            "participateInfo",
            JSON.stringify(response.data.data)
          );
          window.location.href = "/welcome";
        } else {
          console.log(response.data.message);
          setResError(response.data.message);

          if(response.data.errorType ==='popup'){
            setPageType("otp");
            setPopupOpen(true);
          }else{
            setAlreadyPlayed(true);
          }
          // setAlreadyPlayed(true);
          // Swal.fire({
          //   icon: "error",
          //   title: `${response.data.message}`,
          //   showConfirmButton: false,
          //   timer: 2000,
          // });
          // window.location.href = "/login";
          
          // setAlreadyPlayed(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    // setInterval(() => {
    //   console.log(1);
    //   setPopupOpen(false);
    // }, 2000);
    // clearInterval();
  };

  //Registration
  const resendOTP = () => {
    console.log(resData);
    const data = JSON.stringify({
      msisdn: resData.mobile_number,
    });
    //console.log(data);
    //setPageType("otp");
    const config = {
      method: "post",
      url: process.env.REACT_APP_API_URL + "/api/web/v2/auth/send-otp",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer f5522a5e4a2e7efd229edb7c8b3352b417084bb3|738323e2e4204db0c832dcac48a30b07",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //setResError([]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {alreadyPlayed ? (
        <Played message={resError} />
      ) : (
        <>
          <div className="UserLoginWrap">
            <div className="banner">
              <div className="bannerContent">
                {/* <h3 className="bsubTitle">Fastest way to</h3>
                <h2 className="bhomeTitle">Padma Bridge</h2> */}
              </div>
            </div>
            <div className="User_loginContent">
              <div className="userLoginFormWrap">
                {popupTermsOpen && <TermsPopupOpen setPopupTermsOpen={setPopupTermsOpen} />}
                {popupOpen && <Popup message={resError} setPopupOpen={setPopupOpen} />}
                {pageType === "otp" ? (
                  <>
                    {/* {isAccept === true ? ( */}
                    <>
                      <h2 className="secTitle">ওটিপি ভেরিফিকেশন</h2>
                      <p className="secPara">
                        আপনার নাম্বারে ওটিপি পাঠানো হয়েছে
                        <br />
                        <b>+88 {otpNumber}</b>
                      </p>
                      <form
                        className="userLoginForm otpForm"
                        onSubmit={onOTPSubmit}
                      >
                        <label>ওটিপি প্রবেশ করুন</label>
                        <div className="otpBoxWrap">
                          <AutoTabProvider>
                            <input
                              type="number"
                              className="otpSingleBox"
                              id="digit_1"
                              maxLength={1}
                              length={1}
                              min={0}
                              value={otpData.digit_1}
                              tabbable
                              onChange={(e) => onOTPHandleChange(e)}
                              name="digit_1"
                              autoFocus
                              required
                            />
                            <input
                              type="number"
                              className="otpSingleBox"
                              id="digit_2"
                              maxLength={1}
                              length={1}
                              value={otpData.digit_2}
                              min={0}
                              tabbable
                              onChange={(e) => onOTPHandleChange(e)}
                              name="digit_2"
                              required
                            />
                            <input
                              type="number"
                              className="otpSingleBox"
                              id="digit_3"
                              maxLength={1}
                              value={otpData.digit_3}
                              length={1}
                              min={0}
                              tabbable
                              onChange={(e) => onOTPHandleChange(e)}
                              name="digit_3"
                              required
                            />
                            <input
                              type="number"
                              className="otpSingleBox"
                              id="digit_4"
                              maxLength={1}
                              value={otpData.digit_4}
                              length={1}
                              tabbable
                              onChange={(e) => onOTPHandleChange(e)}
                              name="digit_4"
                              required
                            />
                          </AutoTabProvider>
                          
                        </div>
                        <div className="reserndOtp">
                          <div className="left">
                            <p>ওটিপি পাইনি </p>
                          </div>
                          <div className="right">
                            <p>
                              <b>
                                <a
                                  onClick={() => resendOTP()}
                                  style={{ color: "#F26F31" }}
                                >
                                  পুনরায় ওটিপি পাঠান
                                </a>
                              </b>
                            </p>
                          </div>
                        </div>
                        <button
                          className="btn sendBtn"
                          disabled={
                            Boolean(otpData.digit_4) === true ? false : true
                          }
                          style={{ paddingTop: "70px" }}
                        >
                          <div
                            className="btn btnReg"
                            style={{ maxWidth: "310px" }}
                          >
                            <div className="icon">
                              <img src={helicopter} alt="helicopter" />
                            </div>
                            <div className="text">সাবমিট</div>
                          </div>
                        </button>
                      </form>
                    </>
                   
                  </>
                ) : (
                  <>
                    {popupOpen && <Popup message={resError} />}
                    <h2 className="secTitle">রেজিস্ট্রেশন</h2>
                    
                    <p className="secPara">
                      অংশগ্রহণের জন্য নিচের তথ্যগুলো পূরণ করুন
                    </p>

                    <form className="userLoginForm" onSubmit={onHandleSubmit}>
                      <div className="formBox">
                        <label htmlFor="name">নাম</label>
                        <div className="form-group">
                          <FormikControl
                            className="form-control"
                            control="input"
                            type="text"
                            name="paritcipate_name"
                            placeholder="নাম প্রবেশ করুন"
                            onHandleChange={onHandleChange}
                            id="paritcipate_name"
                            required={true}
                          />
                          <i className="material-symbols-outlined">
                            account_circle
                          </i>
                        </div>
                      </div>
                      <div className="formBox">
                        <label htmlFor="name">মোবাইল নাম্বার</label>
                        <div
                          className={
                            numberValidate ? "form-group error" : "form-group"
                          }
                        >
                          <FormikControl
                            className="form-control"
                            control="input"
                            type="text"
                            name="mobile_number"
                            placeholder="XXXXX XXX XXX"
                            onHandleChange={onHandleChange}
                            id="mobile_number"
                            required={true}
                          />
                          <i className="material-symbols-outlined">call</i>
                          {numberValidate ? (
                            <p className="note">
                              {numberValidateMessage}
                            </p>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div className="formBox selGender">
                        <label htmlFor="name">লিঙ্গ</label>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-4 cusCol">
                              <div className="selGenderBox">
                                <input
                                  type="radio"
                                  name="gender"
                                  id="male"
                                  value="male"
                                  onChange={onHandleChange}
                                  
                                />
                                <label htmlFor="male">
                                  <div className="icon">
                                    <i className="fa fa-mars"></i>
                                  </div>
                                  <div className="text">পুরুষ</div>
                                </label>
                              </div>
                            </div>
                            <div className="col-4 cusCol">
                              <div className="selGenderBox">
                                <input
                                  type="radio"
                                  name="gender"
                                  id="female"
                                  value="female"
                                  onChange={onHandleChange}
                                  
                                />
                                <label htmlFor="female">
                                  <div className="icon">
                                    <i className="fa fa-venus"></i>
                                  </div>
                                  <div className="text">মহিলা</div>
                                </label>
                              </div>
                            </div>
                            <div className="col-4 cusCol">
                              <div className="selGenderBox">
                                <input
                                  type="radio"
                                  name="gender"
                                  id="Others"
                                  value="Others"
                                  onChange={onHandleChange}
                                  
                                />
                                <label htmlFor="Others">
                                  <div className="icon">
                                    <i className="fa fa-transgender-alt"></i>
                                  </div>
                                  <div className="text">অন্যান্য</div>
                                </label>
                              </div>
                            </div>
                          </div>
                          {genderValidate ? (
                            <p className="note">
                              {genderValidateMessage}
                            </p>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div className="formBox ageGroup">
                        <label htmlFor="name">বয়সের গ্রুপ</label>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-3 cusCol">
                              <div className="selGenderBox">
                                <input
                                  type="radio"
                                  name="age_group"
                                  id="age_1"
                                  value="18-25"
                                  onChange={onHandleChange}
                                  
                                />
                                <label htmlFor="age_1">১৮-২৫</label>
                              </div>
                            </div>
                            <div className="col-3 cusCol">
                              <div className="selGenderBox">
                                <input
                                  type="radio"
                                  name="age_group"
                                  id="age_2"
                                  value="26-35"
                                  onChange={onHandleChange}
                                  
                                />
                                <label htmlFor="age_2">২৬-৩৫</label>
                              </div>
                            </div>
                            <div className="col-3 cusCol">
                              <div className="selGenderBox">
                                <input
                                  type="radio"
                                  name="age_group"
                                  id="age_3"
                                  value="36-45"
                                  onChange={onHandleChange}
                                  
                                />
                                <label htmlFor="age_3">৩৬-৪৫</label>
                              </div>
                            </div>
                            <div className="col-3 cusCol">
                              <div className="selGenderBox">
                                <input
                                  type="radio"
                                  name="age_group"
                                  id="age_4"
                                  value="46-Above"
                                  onChange={onHandleChange}
                                  
                                />
                                <label htmlFor="age_4">৪৬-উপরে</label>
                              </div>
                            </div>
                          </div>
                          {ageValidate ? (
                            <p className="note">
                              {ageValidateMessage}
                            </p>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div className="terms">
                        <label htmlFor="terms">
                          <input
                            type="checkbox"
                            id="terms"
                            onClick={() => setIsDisabled(!isDisabled)}
                          />
                          আমি <Link to="/login" onClick={()=> setPopupTermsOpen(true)}> শর্তাবলীর </Link> &nbsp;সাথে একমত 
                        </label>
                      </div>
                      <button className="btn sendBtn" disabled={isDisabled}>
                        {console.log(resData.length, "resData")}
                        <div className="btn btnReg">
                          <div className="icon">
                            <img src={helicopter} alt="helicopter" />
                          </div>
                          <div className="text">সাবমিট</div>
                        </div>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default QuizLogin;
