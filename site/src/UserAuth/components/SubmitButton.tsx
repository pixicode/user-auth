import React from 'react';


interface SubmitButtonProps {
    label?: string;
    onClick(): void;
    isLoading: boolean;
}


const SubmitButton: React.FC<SubmitButtonProps> = (props) => {

    const label: string = props.label ? props.label : "Submit";
    const fixedHeight = "calc(100% - 1rem)";  // Full button height and respect padding.
    const spinner = <div style={{left: 0, position: "absolute", marginLeft: "1rem", display: "flex", height: fixedHeight}}>
        <div style={{ width: "1rem", height: "1rem", margin: "auto" }}>
            <div className="spinner-border spinner-border-sm" role="status" style={{ display: "block" }}>
                <span className="sr-only"></span>
            </div>
        </div>
    </div>;

    const displayedSpinner = props.isLoading ? spinner : null;

    return <div>
        <button className="btn btn-lg btn-primary btn-block"
            type="submit"
            style={{ position: "relative" }}
            disabled={props.isLoading}
            onClick={props.onClick}>
                {displayedSpinner}
                {label}
            </button>
    </div>;
}


export default SubmitButton;