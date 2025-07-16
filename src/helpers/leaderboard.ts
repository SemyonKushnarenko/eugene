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