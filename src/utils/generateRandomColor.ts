export function generateRandomColor() {
    // let x = Math.floor(Math.random() * 256);
    // var y = Math.floor(Math.random() * 256);
    // var z = Math.floor(Math.random() * 256);
    // var color = "rgb(" + x + "," + y + "," + z + ")";
    let color = [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
    ].join(', ');
    return `rgb(${color})`
}