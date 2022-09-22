
import {Link} from "react-router-dom";
import Card from "../components/Card";

const Home = () => {

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
            <div style = {{ height: 'auto', overflowX: 'hidden' }}>
            <div className='row' style = {{ padding: 10 }}>
                <div className='col' style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 8, marginBottom: 40, justifyContent: 'center'}}>
                    <Card />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;