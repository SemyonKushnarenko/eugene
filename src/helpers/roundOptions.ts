interface IRoundOptions {
    rounds: number;
    label: string;
}

export const roundOptions: IRoundOptions[] = [
    {
        rounds: 1,
        label: '1 раунд',
    },
    {
        rounds: 3,
        label: '3 раунда',
    },
    {
        rounds: 5,
        label: '5 раундов',
    },
]