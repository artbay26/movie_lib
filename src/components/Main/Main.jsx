import "./Main.scss";
import Reviews from "./Reviews/reviews";

const Main = (props) => {
    return (
        <main>
             <Reviews reviewsPage={props.reviewsState.reviewsPage} dispatch={props.dispatch}/>
        </main>
    )
}

export default Main;