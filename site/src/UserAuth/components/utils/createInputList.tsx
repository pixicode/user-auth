import React from 'react';

const createInputList = (elements: JSX.Element[]) => {

    const keyedElements: JSX.Element[] = [];
    
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        keyedElements.push(<element.type {...element.props} key={i}/>);
    }

    return <div>
        <ul className="list-group">
            {keyedElements}
        </ul>
    </div>
}

export default createInputList;