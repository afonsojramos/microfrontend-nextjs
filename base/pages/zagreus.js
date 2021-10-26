import Head from 'next/head';
import dynamic from 'next/dynamic';

const RemoteZagreus = dynamic(() => import('app2/zagreus'), { ssr: false });

const App2 = () => (
  <>
    <Head>
      <title>Microfrontends Demo - Zagreus</title>
    </Head>
    <RemoteZagreus />
  </>
);

export default App2;
