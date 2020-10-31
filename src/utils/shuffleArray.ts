import { CardPropsType } from "../components/shared/Card/types";

export function shuffleArray(array: CardPropsType[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export function addMirrorItems(array: CardPropsType[]) {
    let _resoult: CardPropsType[] = [];
    array.forEach((item) => {
        _resoult.push(item);
        _resoult.push({
            id: `${item.id}_copy`,
            type: item.type,
            title: item.title,
            icon: item.icon
        });
    })
    return _resoult;
}