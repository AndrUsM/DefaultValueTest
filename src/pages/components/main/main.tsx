import React, { ReactNode } from 'react';

export function Main(props: {
    children?: ReactNode
}) {
    return (
        <main>
            {props.children}
        </main>
    )
}