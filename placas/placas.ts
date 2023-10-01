interface Placas {
    id: number,
    name: string,
    image: string,
    slug: string,
    price: number
}

export const placas: Placas[] = [
    {
        id: 0,
        name: "Mar del Plata",
        image: "/models/mardelplata.png",
        slug: "mardelplata",
        price: 1800
    },
    {
        id: 1,
        name: "Sol",
        image: "/models/sol.png",
        slug: "sol",
        price: 1800
    },
    {
        id: 2,
        name: "Travertino",
        image: "/models/travertino.png",
        slug: "travertino",
        price: 1800
    },
    {
        id: 3,
        name: "Mármol",
        image: "/models/marmol.png",
        slug: "marmol",
        price: 1800
    }
]