import dynamic from 'next/dynamic';

const RemoteZagreus = dynamic(() => import('app2/zagreus'), { ssr: false });

const App2 = () => <RemoteZagreus />;

export default App2;
