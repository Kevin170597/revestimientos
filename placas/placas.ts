interface Placas {
    id: number,
    name: string,
    image: string,
    slug: string,
    size: string,
    price: number
}

export const placas: Placas[] = [
    {
        id: 0,
        name: "Mar del Plata",
        image: "/models/mardelplata.png",
        slug: "mardelplata",
        size: "48cm x 25cm",
        price: 1800
    },
    {
        id: 1,
        name: "Sol",
        image: "/models/sol.png",
        slug: "sol",
        size: "48cm x 26cm",
        price: 1800
    },
    {
        id: 2,
        name: "Travertino",
        image: "/models/travertino.png",
        slug: "travertino",
        size: "50cm x 25cm",
        price: 1800
    },
    {
        id: 3,
        name: "Mármol",
        image: "/models/marmol.png",
        slug: "marmol",
        size: "50cm x 26cm",
        price: 1800
    }
]