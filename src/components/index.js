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
                    <div style={{ padding: 10 }}>
                            <div className="card" style={{padding: 25}}>
                                <img className="rounded-t-lg" src={item.image} style={{maxHeight: 160, maxWidth: 270}} alt="Gambar Mobil" />
                                <div className="tracking-tight text-gray-900 dark:text-white" style={{marginTop: 16}}>{item.name}</div>
                                    <div className="inline-flex justify-content-center py-2 px-3 text-sm font-bold text-center text-white bg-green-500 w-100 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none">
                                        Pilih Mobil
                                    </div >
                            </div>
                        </div>
                ))
            }
      </div>
    )
}

export default Card;