import React, { ReactNode } from 'react';
import { setClass } from '../../../utils/string';
import "./index.scss";

export function ButtonGeneral(props: {
    className?: string,
    children?: ReactNode,
    action: () => void
}) {
    let default_class = "button__general";
    default_class = setClass(props.className, default_class);
    return (
        <button
            onClick={props.action}
            className={default_class}
        >
            {props.children}
        </button>
    )
}