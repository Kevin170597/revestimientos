import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Home page</h1>
      <Link href={"/tienda"}>Store</Link>
    </>
  )
}
