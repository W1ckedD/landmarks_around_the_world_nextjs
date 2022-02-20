import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Landmarks Around the World" />
        <meta
          name="description"
          content="Famous landmarks and tourist attractions around the world"
        />
      </Head>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
