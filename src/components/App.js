import './App.scss';
import Main from './Main/Main';
//import Footer from './Footer/Footer';
//import Header from './Header/Header';
//import {Route, Routes} from "react-router-dom";
function App(props) {
  return (
    <div className="App">
        <div className="wrapper">
            <Main reviewsState={props.state} dispatch={props.dispatch}/>
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