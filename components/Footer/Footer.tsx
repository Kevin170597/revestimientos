import styles from "./Footer.module.css"
import Link from "next/link"
import { FBIcon } from "../Icons/FBIcon"
import { IGIcon } from "../Icons/IGIcon"

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div>
                <h3 className={styles.title}>Seguinos</h3>
                <Link className={styles.mediaIcon} target="_blank" href={"https://instagram.com/kevin170597"}>
                    <FBIcon fill="#fff" />
                </Link>
                <Link className={styles.mediaIcon}  target="_blank" href={"https://instagram.com/kevin170597"}>
                    <IGIcon fill="#fff" />
                </Link>
            </div>
            <div>
                <h3 className={styles.title}>Contacto</h3>
                <p className={styles.contactData}>+5411-62087463</p>
                <p className={styles.contactData}>revestimientos34@gmail.com</p>
            </div>
            <div>
                <h3 className={styles.title}>Recibí ofertas</h3>
                <input placeholder="Email" className={styles.input} type="text" />
                <button className={styles.sendButton}>Enviar</button>
            </div>
        </footer>
    )
}