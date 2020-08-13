import React, {FunctionComponent, PropsWithChildren} from "react";

interface IProps {

}


const Canvas : FunctionComponent<IProps> = (props) => {
    return (
        <svg className="canvas">
            {props.children}
        </svg>
    )
}

export default Canvas;
