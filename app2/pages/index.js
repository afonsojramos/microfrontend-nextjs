import Head from 'next/head';
import Zagreus from '../components/zagreus';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontend Demo App 2</title>
        <meta name='description' content='This is an app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Zagreus />
    </div>
  );
}
