import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Irure ut magna veniam cillum. Et do minim magna duis dolore non nisi
        culpa do cillum minim veniam labore elit. Excepteur officia sit nostrud
      </p>
      <p>
        Irure ut magna veniam cillum. Et do minim magna duis dolore non nisi
        culpa do cillum minim veniam labore elit. Excepteur officia sit nostrud
      </p>
      <Footer />
    </div>
  );
}
