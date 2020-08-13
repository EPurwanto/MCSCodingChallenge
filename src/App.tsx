import React, {useState} from 'react';
import './App.css';
import Canvas from "./shapes/Canvas";
import {RectConstructor} from "./shapes/Rect";
import {CircleConstructor} from "./shapes/Circle";
import {PolyConstructor} from "./shapes/Poly";

function parseShapes(input: string): [JSX.Element[], string[]] {
    const errors: string[] = [];
    const shapes: JSX.Element[] = [];
    let i = 0;

    for (const line of input.split('\n')) {

        const tokens = line.trim().split(' ');

        let comp : undefined | JSX.Element;
        let err : string[] = [];

        switch (tokens[0]) {
            case "r":
                [comp, err] = RectConstructor(tokens, i);
                break;
            case "c":
                [comp, err] = CircleConstructor(tokens, i);
                break;
            case "p":
                [comp, err] = PolyConstructor(tokens, i);
                break;
            default:
                errors.push(line);
        }

        errors.push(...err);
        if (comp)
        {
            i++;
            shapes.push(comp);
        }
    }

    return [shapes, errors];
}

function App() {
    const [text, setText] = useState("");

    const [shapes, errors] = parseShapes(text);

    parseShapes(text);

    return (
        <div className="App">
            <div className="content">
                <Canvas>{shapes}</Canvas>
                <textarea value={text} onChange={event => setText(event.target.value)}/>
                <ul>
                    {errors.filter(e => e).map((e, i) => <li key={i}>{e}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default App;
