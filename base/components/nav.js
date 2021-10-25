import Link from 'next/link';
import styles from '../styles/nav.module.css';

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/thanatos">Load Thanatos</Link>
    <Link href="/">Home</Link>
    <Link href="/zagreus">Load Zagreus</Link>
  </div>
);

export default Nav;
