import Head from "next/head";
import styles from "src/common/styles/Home.module.css";
import Banner from "src/common/components/home/banner";
import Nav from "src/common/components/Nav";
import Footer from "src/common/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Head>
          <title>Wallet App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Zwalletlogo.svg" />
        </Head>

        <main className={styles.main}>
          <Banner />
        </main>
        <Footer />
      </div>
    </>
  );
}
