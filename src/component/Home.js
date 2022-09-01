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

import {useSelector} from "react-redux";

const Home = () => {
    const {dataUser} = useSelector((state)=> state);
    console.log(dataUser);
    return (
        <div>
            <h1>{dataUser.data}</h1>
        </div>
    )
}

export default Home;