import React from 'react';

const withGap = (element: JSX.Element) => {
    return <div style={{ "marginTop": "1.2rem" }}>
        {element}
    </div>
}

export default withGap;