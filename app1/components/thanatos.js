import Image from 'next/image';
import styles from '../styles/thanatos.module.css';

const Thanatos = () => {
  return (
    <main className={styles.main}>
      <Image
        src='https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/9b/Thanatos.png'
        alt='Thanatos'
        width={240}
        height={413}
      />
      <h1 className={styles.title}>No use in idle chat, I`&apos;`m Thanatos, a microfrontend.</h1>
      <span>
        I`&apos;`m hosted at{' '}
        <a target='_blank' href='https://microfrontend-nextjs-poc-app1.vercel.app' rel='noreferrer'>
          https://microfrontend-nextjs-poc-app1.vercel.app
        </a>
      </span>
    </main>
  );
};

export default Thanatos;
