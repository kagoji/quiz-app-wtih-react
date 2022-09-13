
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/assets/css/style.css';
import Finish from './component/finish';
import Home from './component/Home';
import Played from './component/Played';
import Popup from './component/popup';
import QiuzPage from "./component/QiuzPage";
import QuizStart from './component/quiz-start';
import QuizLogin from "./component/QuizLogin";
import Terms from './component/terms';
import WelcomePage from './component/welcome-start';



function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                {/* <Route path={"/"}/> */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/Popup"} element={<Popup />} />
                <Route path={"/welcome"} element={<WelcomePage />} />
                <Route path={"/quizStart"} element={<QuizStart />} />
                <Route path={"/finish"} element={<Finish />} />
                <Route path={"/terms"} element={<Terms />} />
                <Route path={"/login"} element={<QuizLogin />} />
                <Route path="/quiz" element={<QiuzPage />} />
                <Route path="/played" element={<Played />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
