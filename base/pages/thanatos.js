import Head from 'next/head';
import dynamic from 'next/dynamic';

const RemoteThanatos = dynamic(() => import('app1/thanatos'), { ssr: false });

const App1 = () => (
  <>
    <Head>
      <title>Microfrontends Demo - Thanatos</title>
    </Head>
    <RemoteThanatos />
  </>
);

export default App1;
