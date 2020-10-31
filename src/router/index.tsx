import React from 'react';
import { ModalWindow } from '../components/shared/modalWindow';
import { Main } from '../pages/components/main/main';
import { AppRouterComponent } from './components/appRouterComponent';

export function AppRouter() {
    return (
        <Main>
            <AppRouterComponent />
            <ModalWindow />
        </Main>
    )
}