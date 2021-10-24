import Image from 'next/image';
import styles from '../styles/zagreus.module.css';

const Zagreus = () => {
  return (
    <main className={styles.main}>
      <Image
        src='https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/29/Zagreus.png'
        alt='Zagreus'
        width={240}
        height={413}
      />
      <h1 className={styles.title}>Hey, name's Zag! I'm a microfrontend.</h1>
      <span>
        I'm hosted at{' '}
        <a target='_blank' href='https://test.vercel.app'>
          https://test.vercel.app
        </a>
      </span>
    </main>
  );
};

export default Zagreus;
