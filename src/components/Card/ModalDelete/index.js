import { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import swal from "sweetalert";
import { handleCar } from '../../../redux/actions/carAction';
import { ModalImg } from '../../../assets';

const ModalDelete = (props) => {
    const { handleModal, carId} = props
    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        console.log(carId);
        axios
        .delete(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
        .then((res)=> {
            console.log(res.status);
            if (res.status === 200) {
                swal({
                    title: "Deleted!",
                    text: "Data berhasil dihapus",
                    icon: "success",
                    timer: 2000,
                })
                handleModal()
            }
        })
        .catch((err) => console.log(err.message))
    }

    useEffect(() => {
        dispatch(handleCar())
    }, [])

    return (
        <div className="modal-delete__backdrop df-center">
        <div className="modal df-center">
          <div className="modal-content df-center">
            <img src={ModalImg} alt="car" />
            <h3>Menghapus Data Mobil</h3>
            <p>
              Setelah dihapus, data mobil tidak dapat dikembalikan, Yakin ingin
              menghapus?
            </p>
            <div className="modal-button">
              <button onClick={() => handleDelete(carId)} className="btn-primary">
                Ya
              </button>
              <button onClick={handleModal} className="btn-outlined-primary">
                Tidak
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ModalDelete;