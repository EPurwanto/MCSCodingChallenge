import React, {useState} from 'react';
import './App.css';
import Canvas from "./shapes/Canvas";
import {parseShapes, randomColour} from "./utils";


function App() {
    const [text, setText] = useState("");
    const [colours, setColours] = useState<string[]>([]);

    const [shapes, errors] = parseShapes(text, (i) => {
        if (colours[i]) {
            return colours[i];
        }
        const colour = randomColour();

        const newColours = colours.slice();
        newColours[i] = colour;
        setColours(newColours)

        return colour;
    });

    return (
        <div className="App">
            <div className="content">
                <Canvas>{shapes}</Canvas>
                <textarea value={text} onChange={event => setText(event.target.value)}/>
            </div>
            <div className="errors">
                <ul>
                    {errors.filter(e => e).map((e, i) => <li key={i}>{e}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default App;
