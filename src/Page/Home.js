// import React, {Component} from "react";
// import {connect} from "react-redux";

// class Home extends Component {
    
//     render() { 
//         return ( 
//             <div>
//                 <h1>{this.props.data}</h1>
//             </div>
//          );
//     }
// }

// const mapStateToProps = (state) => ({
//     data: state.dataUser.data,
// })
 
// export default connect(mapStateToProps)(Home);

import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import { getData } from "../redux/actions/dataAction";
import {Link} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const {dataUser} = useSelector((state)=> state);
    
    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <div>
            <Link to ="/register">
                <button>Register</button>
            </Link>
            <Link to ="/login">
                <button>Login</button>
            </Link>
            <Link to ="/login-class">
                <button>Login Class</button>
            </Link>
            <h1>Home Page</h1>
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

export default Home;