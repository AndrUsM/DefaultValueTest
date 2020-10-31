import React, { ReactNode } from 'react';
import "./styles.scss";

export function CardsContainer(props: {
    children?: ReactNode
}) {
    return (
        <section className="container">
            {props.children}
        </section>
    )
}