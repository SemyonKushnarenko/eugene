interface ITimeOptions {
    time: number;
    label: string;
}

export const timeOptions: ITimeOptions[] = [
    {
        time: 3,
        label: '3 секунды',
    },
    {
        time: 20,
        label: '20 секунд',
    },
    {
        time: 60,
        label: '1 минута',
    },
    {
        time: 300,
        label: '5 минут',
    },
    {
        time: 600,
        label: '10 минут',
    },
    {
        time: 1800,
        label: '30 минут',
    },
    {
        time: 3600,
        label: '60 минут',
    },
    {
        time: -1,
        label: 'Без времени',
    },
]