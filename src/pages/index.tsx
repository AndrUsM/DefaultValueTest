import React from 'react';
import { CardsBlockWrapper } from '../components/pages/CardsBlock/CardBlockWrapper';
import { MovesIndicator } from '../components/shared/MovesIndicator';

export function IndexPage() {
    return (
        <>
            <MovesIndicator />
            <CardsBlockWrapper />
        </>
    )
}