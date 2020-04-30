import React from 'react';

function Welcome(props) {
    return <h1> {props.greeting}, {props.name} {props.lastname} !</h1>; 
}

export default function Equipo(props) {
    return (
        <div>
            <Welcome name="Ana" lastname="Nedelcu" greeting={props.greeting} />
            <Welcome name="Miruna"  lastname="Nedelcu" greeting={props.greeting} />
            <Welcome name="Olga"  lastname="Nedelcu" greeting={props.greeting} />
            <Welcome name="Bogdan"  lastname="Nedelcu" greeting={props.greeting} />
        </div>
    );
}
