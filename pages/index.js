import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Irure ut magna veniam cillum. Et do minim magna duis dolore non nisi
          culpa do cillum minim veniam labore elit. Excepteur officia sit
          nostrud
        </p>
        <p className={styles.text}>
          Irure ut magna veniam cillum. Et do minim magna duis dolore non nisi
          culpa do cillum minim veniam labore elit. Excepteur officia sit
          nostrud
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
