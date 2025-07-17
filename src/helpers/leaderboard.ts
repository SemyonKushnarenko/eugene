export function getCupByIndex(index: number): string {
    if (index === 1) return 'gold.png'
    if (index === 2) return 'silver.png'
    if (index === 3) return 'bronze.png'
    return 'no_cup.svg'
}

export function getShortAmount(points: number): string {
    if (points.toString().length > 9) return Math.round(points/1000000000) + ' млрд. баллов' 
    if (points.toString().length > 6) return Math.round(points/1000000) + ' млн. баллов' 
    if (points.toString().length > 3) return Math.round(points/1000) + ' тыс. баллов' 
    const rest = points % 10
    if (rest === 1) return points + ' балл'
    if (rest > 1 && rest < 5) return points + ' балла'
    return points + ' баллов'
}

export interface IPlayer {
    id: number,
    name: string,
    points: number,
    country?: string,
    avatar?: string,
};

export const players: IPlayer[] = Array.from({length: 187}, (_, i) => ({
    id: i + 1,
    name: `Player ${i + 1}`,
    points: Math.ceil(Math.random() * 22000000),
    country: ['ru', 'es', 'ch'][i % 10],
    avatar: i % 4 === 0 ? '/avatar/Oleg.png' : '',
})).sort((a, b) => b.points - a.points);

console.log('players', players)