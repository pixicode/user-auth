import React from 'react';
import AuthProps from '../models/AuthProps';
import { Envelope } from 'react-bootstrap-icons';

const ForgotPassword: React.SFC<AuthProps> = (props) => {

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
        </ul>
    </div>

    const submitButton = <div>
        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Submit"></input>
    </div>

    return <>
        Forgot your password? We can send a reset instructions to your email.
        {withGap(inputElement)}
        {withGap(submitButton)}
    </>;
}

export default ForgotPassword;