
import {Link} from "react-router-dom";
import Card from "../components";

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
            <Card />
        </div>
    )
}

export default Home;