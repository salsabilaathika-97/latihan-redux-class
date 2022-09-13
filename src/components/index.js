import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import { getData } from "../redux/actions/dataAction";

const Card = () => {
    const dispatch = useDispatch();
    const {dataUser} = useSelector((state)=> state);
    
    useEffect(() => {
        dispatch(getData());
    }, []);
    return (
      <div>
           {
                dataUser.data.map(item => (
                    <div>
                        <h1>{item.first_name}</h1>
                        <img src = {item.avatar} />    
                    </div>
                ))
            }
      </div>
    )
}

export default Card;