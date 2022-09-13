
import rightAngle from '../assets/img/right-angle.svg';

const QuizStart = () => {
  return (
    <div className="quizStartWrap">
      <div className="banner">
        <div className="bannerContent">
          <h3 className="bsubTitle">Fastest way to</h3>
          <h2 className="bhomeTitle">Padma Bridge</h2>
        </div>
      </div>
      <div className="quizContent">
        <h2 className="secTitle">Questions</h2>
        <p className="secPara">
          Please answer the five questions to participate the quiz contest.
        </p>
        <div className="questionCounter">
          <ul>
            <li className="complate">1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
          <div className="couter">2/5</div>
        </div>
      </div>
      <div className="quistionContent">
        <h2>
          <span style={{ marginRight: "5px" }}>1. </span>
          <span>Question goes here question goes here?</span>
        </h2>
        <ul className="questionList">
          {[1, 2, 3, 4].map((item, index) => (
            <div className={`quizItem`} key={index}>
              <input type="radio" name="quiz" id={index} value={index + 1} />
              <label htmlFor={index}>
                <span> Option {item}</span>
              </label>
            </div>
          ))}
        </ul>

        <button
          className="btn sendBtn"
          style={{ paddingTop: "70px", width: "100%" }}
        >
          <div
            className="btn btnReg"
            style={{ maxWidth: "310px", position: "static" }}
          >
            <div className="text">Next <img src={rightAngle} alt="right angle" /> </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default QuizStart;
