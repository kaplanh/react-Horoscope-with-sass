import Navbar from "./components/navbar/Navbar";
import { data } from "./helper/data";
import AppStyle from "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
function App() {
    console.log(data);
    return (
        <div className={AppStyle["body"]}>
            <Navbar />
            <Header />
            <Main />
        </div>
    );
}

export default App;
