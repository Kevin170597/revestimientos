"use client"
import { useState } from "react"
import Image from "next/image"
import styles from "./Display.module.css"

interface Pictures {
    img: string[]
}

export default function Display({ img }: Pictures) {

    const [image, setImage] = useState<string>(img[0])

    return (
        <div className={styles.display}>
            <div className={styles.selector}>
                {img.map((e, i) =>
                    <div
                        key={i}
                        className={styles.thumbnailContainer}
                        onMouseEnter={() => setImage(e)}
                        style={{border: image === e ? "solid 3px #fff" : ""}}
                    >
                        <Image
                            className={styles.thumbnail}
                            width={0}
                            height={0}
                            sizes="100vw"
                            src={e}
                            alt="modelo"
                        />
                    </div>
                )}
            </div>
            <div className={styles.pictureContainer}>
                <Image
                    className={styles.picture}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={image}
                    alt="modelo"
                />
            </div>
        </div>
    )

}