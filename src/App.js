import './App.css';
import {useEffect} from "react";
import {getBeersData} from "./redux/beer-reducer";
import {Provider, useDispatch} from "react-redux";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import store from "./redux/Redux-store";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import BeerPage from "./Components/BeerPage/BeerPage";

const App = () => {
    let dispatch = useDispatch()
    useEffect(() => {

        dispatch(getBeersData())
    })
    return (
        <BrowserRouter>
            <Header/>
            <div className="App">
                <Routes>
                    <Route exact={true} path={"/"} element={<Main/>}/>
                    <Route path="/beerinfo/:id" element={<BeerPage />}/>
                </Routes>
            </div>

        </BrowserRouter>

    )
}
const BeerFrontApp = (props) => {
    return <>
        <Provider store={store}>
            <App/>
        </Provider>
    </>
}

export default BeerFrontApp;
