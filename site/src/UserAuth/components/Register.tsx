import React from 'react';
import AuthProps from '../models/AuthProps';

const Register: React.SFC<AuthProps> = (props) => {

    const withGap = (element: JSX.Element) => {
        return <div style={{ "marginTop": "1.2rem" }}>
            {element}
        </div>
    }

    const inputElement = <div>
        <ul className="list-group">
            <input type="text" className="list-group-item" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            <input type="text" className="list-group-item" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
        </ul>
    </div>

    const forgotPasswordElement = <div className="text-left">
        <button className="btn btn-link">Forgot Password?</button>
    </div>

    const submitButton = <div>
        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Submit"></input>
    </div>

    const registerButton = <div>
        <button className="btn btn-link">Create an account</button>
    </div>

    return <>
        Register new account!
        {withGap(inputElement)}
        {forgotPasswordElement}
        {withGap(submitButton)}
        {registerButton}
    </>;
}

export default Register;