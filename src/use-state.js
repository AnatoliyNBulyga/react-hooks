import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <HookSwitcher/>
        </div>
    )
}

const HookSwitcher = () => {
    const [ color, setColor ] = useState('white' );
    const [ fontSize, setFontSize ] = useState(14);
    return (
        <div style={{padding:'10px', backgroundColor: color, fontSize: `${fontSize}px`}}>
            <h1>Hello World !</h1>
            <button
                onClick={() => setColor('gray')}>
                Dark
            </button>
            <button
                onClick={() => setColor('white')}>
                Light
            </button>
            <button
                onClick={() => setFontSize((s) => s + 1)}>
                FontSize +
            </button>
            <button
                onClick={() => setFontSize((s) => s - 1)}>
                FontSize -
            </button>
        </div>
    )
}

/*const Person = () => {
    const [firstName, setFirstName] = useState('Bob');
    const [lastName, setLastName] = useState('Smith');
    
    setFirstName('Mike');
    setLastName('Shevchenko');
}*/
const Person = () => {
    const [ person, setPerson ] = useState({
        firstName: 'Bob',
        lastName: 'Smith'
    });
    setPerson((person) => {
        return {...person, firstName: 'Mike'}
    })
}

ReactDOM.render(<App />, document.getElementById('root'));
