"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { AntiHumedad } from "@/interfaces"

interface Props {
    placa: AntiHumedad
}

export const Card = ({ placa }: Props) => {
    const router = useRouter()

    const priceWithDiscount = (price: number, discount: number) => {
        return (price - (price * discount / 100))
    }

    return (
        <div
            className="bg-primary-light px-3 pt-1 pb-6 cursor-pointer flex flex-col items-center"
            onClick={() => router.push(`/tienda/anti-humedad/${placa.slug}`)}
        >
            <div className="w-full py-4 px-1 flex justify-center">
                <Image
                    className="w-[90%] h-auto"
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={`/models/${placa.image}`}
                    alt="modelo"
                />
            </div>
            <h2 className="mb-3 text-2xl text-font-white-2">{placa.name}</h2>
            <p className="line-through text-font-white-2">
                {placa.discount > 0 ? `$${placa.price.toLocaleString("es-AR")}` : ""}
            </p>
            <div className="flex items-center">
                <h1 className="text-font-white-1 text-2xl mt-3">
                    {placa.discount > 0 ?
                        `$${priceWithDiscount(placa.price, placa.discount).toLocaleString("es-AR")} m2`
                        :
                        `$${placa.price.toLocaleString("es-AR")} m2`
                    }
                </h1>
                <p className="ml-2 text-[#59f58a]">{placa.discount > 0 ? `${placa.discount}% OFF` : ""}</p>
            </div>
        </div>
    )
}