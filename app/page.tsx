import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>placas</h1>
      <Link href={"/anti-humedad"}>antihumidity</Link>
    </>
  )
}
