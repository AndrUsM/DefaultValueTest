export type ReduxActionType_Payload<T = any> = (data: T) => ReduxActionReturnType<T>

export type ReduxActionType_Simple = () => {
    type: string
}

export type ReduxActionReturnType<T = any> = {
    type: string,
    payload: T
}