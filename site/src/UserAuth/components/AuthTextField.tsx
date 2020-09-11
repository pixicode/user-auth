import React from 'react';
import { Envelope } from 'react-bootstrap-icons';

interface AuthTextFieldProps {

}

const AuthTextField: React.FC<AuthTextFieldProps> = (props) => {
    return <><li className="list-group-item d-flex">
        <Envelope size={"1.2rem"} color="#888" style={{ marginTop: "auto", marginBottom: "auto", marginRight: "1rem" }} />
        <input style={{ border: "None", width: "100%" }} type="text" placeholder="Username" />
    </li></>;
}

export default AuthTextField;