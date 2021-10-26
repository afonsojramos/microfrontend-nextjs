import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontends Demo - Hades</title>
      </Head>

      <main className={styles.main}>
        <Image
          src="https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/64/Hades.png"
          alt="Zagreus"
          width={370}
          height={450}
        />
        <h1 className={styles.title}>
          Mark you my words. <i>I</i> am locally hosted!
        </h1>
        <span>I&apos;m hosted at right here...</span>
      </main>
    </div>
  );
}
