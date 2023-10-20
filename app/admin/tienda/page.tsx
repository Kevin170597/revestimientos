import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tienda"
}

export default function Store() {

    return (
        <div className="py-6 px-[6%]">
            <div className="bg-white rounded shadow-1">
                {[1, 2, 3].map((e) =>
                    <div className="flex border-b p-4" key={e}>
                        <Image
                            className="w-[10%] object-contain"
                            width={60}
                            height={60}
                            src={"/models/mardelplata.png"}
                            alt="foto"
                        />
                        <div className="w-1/4 px-3 flex flex-col justify-center">
                            <p className="text-font-black-1 text-xs">65149b466bb65951fc335cad</p>
                            <Link className="text-font-black-1" href={`/admin/tienda/${"mardelplata"}`}>Mar del Plata</Link>
                        </div>
                        <div className="w-1/4 flex flex-col items-center justify-center p-4 ml-auto">
                            <p className="text-font-black-1">$2.500</p>
                        </div>
                        <div className="w-1/4 px-4 flex flex-col items-center justify-center">
                            <p className="text-xs text-font-black-1">Disponible</p>
                            <p className="text-sm text-font-black-1">15 m2</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}