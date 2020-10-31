export enum ModalWindowStatus {
    close,
    open
};

export type ModalWindowType = {
    status: ModalWindowStatus
};

export type ModalContentIdentificatorType ={
    id: ModalContentIdentificator
};

export enum ModalContentIdentificator {
    WIN_MESSAGE,
    DEFAULT
};