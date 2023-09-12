// _app.js is a top-level React component that wraps all the pages in your application. 

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}