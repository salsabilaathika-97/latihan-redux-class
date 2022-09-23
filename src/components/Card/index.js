import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import { getData, getMockData } from "../../redux/actions/dataAction";
import { NoImage } from "../../assets";
import { Link } from "react-router-dom";
import ModalDelete from "./ModalDelete";
import ButtonDelete from "./ButtonDelete";

const Card = () => {
    const dispatch = useDispatch();
    const {dataUser} = useSelector((state)=> state);
    
    useEffect(() => {
        dispatch(getData());
    }, []);

    const formatCurrency = (number) => {
        let fNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return "Rp. "+fNumber;
    }
    return (
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
           {
                dataUser.data.map(item => (
                    <div className="inline-flex p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md" style={{ padding: 10 }}>
                            <div>
                                <div style = {{ marginLeft: 16 }}>
                                {!!item.image ? <img className="rounded-t-lg" style = {{ maxHeight: 160, maxWidth: 270 }} src = {item.image} alt = "gambar-mobil"/> : <img className="rounded-t-lg" style = {{ maxHeight: 160, maxWidth: 270 }} src = {NoImage} alt = "no-image"/>}   
                                </div>
                                <div style = {{ marginLeft: 16, marginTop: 8 }}>
                                    {!!item.name ? <div style={{fontFamily: 'arial', fontSize: 16, fontStyle: 'normal', marginBottom: 8}}>{item.name}</div> : <div style={{fontFamily: 'arial', fontSize: 16, fontWeight: 700, fontStyle: 'normal', marginBottom: 8}}>Nama tidak tersedia</div>}
                                    {!!item.price ? <p style = {{ fontFamily: 'arial', fontWeight: 700 }}>{formatCurrency(item.price)} / hari</p> : <p style = {{ fontFamily: 'arial' }}>Harga tidak tersedia</p>}
                                    {!!item.category ? <p style = {{ fontFamily: 'arial', fontSize: 14 }}>{item.category}</p> : <p style = {{ fontFamily: 'arial' }}>Kategori tidak tersedia</p>}
                                    {!!item.updatedAt ? <p style = {{ fontFamily: 'arial', fontSize: 10 }}>Updated at {item.updatedAt}</p> : <p style = {{ fontFamily: 'arial' }}>Tidak ada update baru</p>}
                                </div>
                                <div class="inline-flex" role="group">
                                    <ButtonDelete carId = {item.id}/>
                                    <Link to = {`/edit/${item.id}`}>
                                    <button type="button" class="text-white hover:text-white border-2 border-[#5CB85F] bg-[#5CB85F] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>    
                                    Edit
                                    </button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                ))
            }
      </div>
    )
}

export default Card;