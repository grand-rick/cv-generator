import { Component } from "react";
import {
    Link,
} from 'react-router-dom';

class Home extends Component {

    render () {

        return (
            <div className="home">
                <Link className="btn btn-success home-title" to="/">Home</Link>
                <Link className="btn btn-primary form-title" to="/form">Form</Link>
                <h1>Welcome to the CV Generator Project</h1>
                <p>To use it: <br /> You'll fill in the form and then generate a cv, it's that simple</p>
                <p>Go ahead and click the form button.</p>
            </div>
        )
    }
}

export default Home;