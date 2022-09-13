import popupImg from "../assets/img/helicopter.gif";

const Popup = ({ message, setPopupOpen }) => {
  return (
    <div className="popupWrap">
      <div className="popupInner">
        <div className="popupImg">
          <img src={popupImg} alt="popupImg" className="img-fluid" />
          <p>{message}</p>
          <button className="btn sendBtn" style= {{width: '100%'}}>
            <div className="btn btnReg" onClick={() => setPopupOpen(false)} style={{position: 'static', width: '120px', margin: '30px auto 0'}}>
              <div className="text">ঠিক আছে </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
