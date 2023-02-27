import Head from "next/head";
import styles from "@/styles/Global.module.css";
import WelcomeSection from "@/components/WelcomeSection";
import LatestPosts from "@/components/LatestPosts/LatestPosts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mate Cuenca | Blog</title>
        <meta name="description" content="Mate Cuenca - Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.svg" />
      </Head>
      <main className={styles.container}>
        <WelcomeSection />
        <LatestPosts />
      </main>
    </>
  );
}
