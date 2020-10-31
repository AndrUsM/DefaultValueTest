import React from 'react';
import "./styles.scss";

export function WinMessage() {
    return (
        <article>
            <p className="message-header">You win</p>
            <p className="message-text">After few seconds you can start game again!</p>
        </article>
    )
}