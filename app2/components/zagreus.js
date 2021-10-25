import Image from 'next/image';
import styles from '../styles/zagreus.module.css';

const Zagreus = () => {
  return (
    <main className={styles.main}>
      <Image
        src='https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/29/Zagreus.png'
        alt='Zagreus'
        width={325}
        height={450}
      />
      <h1 className={styles.title}>Hey, name&apos;s Zag! I&apos;m a microfrontend.</h1>
      <span>
        I&apos;m hosted at{' '}
        <a target='_blank' href='https://microfrontend-nextjs-poc-app2.vercel.app' rel='noreferrer'>
          https://microfrontend-nextjs-poc-app2.vercel.app
        </a>
      </span>
    </main>
  );
};

export default Zagreus;
