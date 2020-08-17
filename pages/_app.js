// import '../styles/globals.css';

import AppLayout from '../components/AppLayout/AppLayout';

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
