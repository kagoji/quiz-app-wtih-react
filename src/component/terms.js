import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <>
      <div className="UserLoginWrap">
        <div className="banner">
          {/* <div className="bannerContent">
            <h3 className="bsubTitle">Fastest way to</h3>
            <h2 className="bhomeTitle">Padma Bridge</h2>
          </div> */}
        </div>

        <div className="User_loginContent">
          <div className="userLoginFormWrap">
            <h2 className="secTitle">Terms & Conditions</h2>
            <p className="secPara">
              Please read the terms and conditions content properly before
              moving into the next step.
            </p>
            <p className="secPara">
              By visiting or using this website you agree to comply with the
              following terms and conditions If you have any query regarding the
              terms and condition, Please write to:{" "}
              <a href="mailto:info@banglalink.net" style={{ color: "#F26F31" }}>
                info@banglalink.net
              </a>
            </p>
            <p className="secPara">
              A this web page is a public resource of general information that
              is intended, but not promised or guaranteed, to be correct,
              complete and up-to-date. However, this web page is not intended to
              be a source of advertising, solicitation, or legal advice; and
              this should not rely on information provided herein and should
              always seek the advice of competent counsel in the reader’s or
              endorsements of the linked entities. The use of the internet
              e-mail for confidential or sensitive information is discouraged.
            </p>
            <p className="secPara">
              Banglalink has adopted this privacy policy to inform you how any
              personal information that Banglalink collects during your visit of
              the web site will be used. Banglalink will take all steps
              reasonably necessary to ensure that your data is treated securely
              and in accordance with this privacy policy.
            </p>
            <p className="secPara">
              When visitors visit this website, we record their internet
              protocol address (“IP Address) and other related information. With
              an IP Address we can track their use of this website. Use tracked
              includes the pages most frequently requested, the number of
              requests per page, the type of browser used by the visitor, the
              type of operating system in use by the visitor and the domain name
              of the visitor's internet service provider.
            </p>
            <div className="acBtnWrap">
              <Link to={'/'}
                className="btn sendBtn"
              >
                <div className="text">I Decline</div>
              </Link>
              <Link to={'/login'}
                className="btn sendBtn"
              >
                <div className="text">I Accept</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
