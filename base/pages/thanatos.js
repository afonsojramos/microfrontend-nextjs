import dynamic from 'next/dynamic';

const RemoteThanatos = dynamic(() => import('app1/thanatos'), { ssr: false });

const App1 = () => <RemoteThanatos />;

export default App1;
