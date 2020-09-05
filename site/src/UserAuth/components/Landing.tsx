import React from 'react';
import AuthProps from '../models/AuthStatus copy';
import AuthStatus from '../models/AuthStatus';
import { LockFill, Envelope } from 'react-bootstrap-icons';

const Landing: React.SFC<AuthProps> = (props) => {

    const withGap = (element: JSX.Element) => {
        return <div style={{ "marginTop": "1.2rem" }}>
            {element}
        </div>
    }

    const inputElement = <div>
        <ul className="list-group">
            <li className="list-group-item d-flex">
                <Envelope size={"1.2rem"} color="#888" style={{ marginTop: "auto", marginBottom: "auto", marginRight: "1rem" }} />
                <input style={{ border: "None", width: "100%" }} type="text" placeholder="Username" />
            </li>

            <li className="list-group-item d-flex">
                <LockFill size={"1.2rem"} color="#888" style={{ marginTop: "auto", marginBottom: "auto", marginRight: "1rem" }} />
                <input style={{ border: "None", width: "100%" }} type="password" placeholder="Password" />
            </li>
        </ul>
    </div>

    const forgotPasswordElement = <div className="text-left">
        <button className="btn btn-link">Forgot Password?</button>
    </div>

    const submitButton = <div>
        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Submit"></input>
    </div>

    const registerButton = <div>
        <button className="btn btn-link"
            onClick={() => props.setAuthState({ ...props.authState, status: AuthStatus.REGISTERING })}
        >Create an account
        </button>
    </div>

    return <>
        Please sign in to continue.
        {withGap(inputElement)}
        {forgotPasswordElement}
        {withGap(submitButton)}
        {registerButton}
    </>;
}

export default Landing;