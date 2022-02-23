import Head from 'next/head';
import Link from 'next/link';

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>404 - Page Not Found!</h1>
        <a className="text-primary">
          <Link href="/">Back to Home Page</Link>
        </a>
      </div>
    </>
  );
}
