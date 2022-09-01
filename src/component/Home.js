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

const Home = () => {
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

export default Home;