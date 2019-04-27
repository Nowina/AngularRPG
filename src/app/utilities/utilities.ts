export function getRandomNumber( max :number, min : number = 0): number{
    return Math.floor(min + (max - min)*Math.random());
}