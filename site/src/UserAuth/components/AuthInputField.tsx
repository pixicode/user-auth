import React from 'react';
import { LockFill, Envelope } from 'react-bootstrap-icons';

export enum AuthInputFieldType {
    EMAIL,
    PASSWORD
}

interface AuthInputFieldProps {
    value: string;
    setValue(x: string): void;
    fieldType: AuthInputFieldType;
}


const AuthInputField: React.FC<AuthInputFieldProps> = (props) => {

    let inputType: string;
    let inputPlaceholder: string;
    let iconComponent: JSX.Element;

    switch (props.fieldType) {
        case AuthInputFieldType.EMAIL:
            inputType = "text";
            inputPlaceholder = "Email";
            iconComponent = <Envelope />;
            break;

        case AuthInputFieldType.PASSWORD:
            inputType = "password";
            inputPlaceholder = "Password";
            iconComponent = <LockFill />;
            break;
    }

    return <><li className="list-group-item d-flex">
        <iconComponent.type color="#888" style={{ marginTop: "auto", marginBottom: "auto", marginRight: "1rem", fontSize: "1.2rem"}} />
        <input style={{ border: "None", width: "100%" }} 
        type={inputType} 
        placeholder={inputPlaceholder} 
        defaultValue={props.value} 
        onChange={e => {props.setValue(e.currentTarget.value)}}
        />
    </li></>;
}

export default AuthInputField;