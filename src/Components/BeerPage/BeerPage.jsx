import React, {useEffect} from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getOneBeer} from "../../redux/beer-reducer";
import "./BeerPage.module.css"

const BeerPage = (props) => {
    let navigate = useParams()
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneBeer(navigate.id))
    }, [])
    let oneBeer = useSelector(state => state.beer.oneBeer)
    return (
        <div className={"beerPage"}>
            <NavLink to={"/"}>Back to list</NavLink>
            <div className={"background"}>
                <div className={"info"}>

                    <div>
                    </div>
                    <h2>
                        {oneBeer?.name}
                    </h2>

                    {oneBeer ? oneBeer.description : <div>error</div>}
                    <div>
                        <div>
                            abv:{oneBeer?.abv}
                        </div>
                        first_brewed:{oneBeer?.first_brewed}
                        <div>

                        <img src={oneBeer?.image_url} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BeerPage;
