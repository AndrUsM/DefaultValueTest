import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export type CardType = {
    id: string,
    title: string,
    type: number
}

export interface CardPropsType extends CardType {
    icon: IconDefinition
}

export type CardTypeRedux = CardType[]