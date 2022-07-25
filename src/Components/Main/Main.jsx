import React from 'react';
import "./Main.scss"
import {useSelector} from "react-redux";
import OneBeer from "./OneBeer/OneBeer";
import Finder from "./Finder/Finder";
import {NavLink} from "react-router-dom";

const Main = () => {
    const activeId = useSelector((state) => state.beer.beersInfo)
    const activeBeer = useSelector((state) => state.beer.beersInfo)

    return (
        <div className={"main"}>
            <Finder />
            {activeId ? <div className={"beersList"}>{activeId.map(el => <NavLink to={`/beerinfo/${el.id}`} key={el.id}>
                <OneBeer id={el.id} name={el.name} tagline={el.tagline} first_brewed={el.first_brewed} description={el.description}
                         image_url={el.image_url} abv={el.abv}/>
            </NavLink>)}</div>:<div className={"main"}>Данное пиво закончилось :(</div>}
        </div>
    );
};

export default Main;
