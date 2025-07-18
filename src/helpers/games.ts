export interface IGame {
    name: string,
    bg: string,
    icon: string,
    slug: string,
}

export const games: IGame[] = [
    {
        name: 'PUBG Mobile',
        bg: '/games/pubg_bg.png',
        icon: '/games/pubg_icon.png',
        slug: 'pubg',
    },
    {
        name: 'Genship Impact',
        bg: '/games/genshin_bg.png',
        icon: '/games/genshin_icon.png',
        slug: 'genshin',
    },
]