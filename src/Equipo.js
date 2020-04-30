import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name} {props.lastname}!</h1>; 
}

export default function App() {
    return (
        <div>
            <Welcome name="Ana" lastname="Nedelcu" />
            <Welcome name="Miruna"  lastname="Nedelcu" />
            <Welcome name="Olga"  lastname="Nedelcu" />
            <Welcome name="Bogdan"  lastname="Nedelcu" />
        </div>
    );
}
