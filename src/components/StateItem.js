import React from 'react';

function StateItem(props) {
    return (
        <div>
            <h2>#{props.index}</h2>
            <h1>Credits: {props.data && props.data.credits}</h1>
            <h3>Starships: {props.data.starships.map(s => <p>{s[0] && s[0].name}</p>)}</h3>
        </div>
    );
}

export default StateItem;