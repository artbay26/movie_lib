import './App.scss';
import Header from "./Header/Header";
import HeaderBottom from "./Header/HeaderBottom";
import Main from './Main/Main';
//import {useDispatch, useSelector} from "react-redux";
//import {setReviews} from "../../../data/reducers/reviewsReducer";
//import Footer from './Footer/Footer';
//import Header from './Header/Header';
//import {Route, Routes} from "react-router-dom";
function App() {
   
    return (
    <div className="App">
        <div className="wrapper">
            <Header/>
            <HeaderBottom/>
            <Main/>
           {/* <Header/>            
            <Footer/>
            <Routes>
                <Route path='/comments/*' element={<Comments commentsPage={props.state.commentsPage} dispatch={props.dispatch}/>}/>
            </Routes>
            */}
        </div>
    </div>
  );
}

export default App;