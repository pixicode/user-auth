import React from 'react';

interface AuthTextButtonProps {
    label: string;
    onClick(): void;
}

const AuthTextButton: React.FC<AuthTextButtonProps> = (props) => {
    return <button className="btn btn-link" onClick={props.onClick}>{props.label}</button>;
}

export default AuthTextButton;