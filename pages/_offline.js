import Head from 'next/head';

export default function OfflinePage() {
  return (
    <>
      <Head>
        <title>Internet Connection Required</title>
      </Head>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>You Are Offline!</h1>
        <h4>Internet Connection Required to display the content of this page.</h4>
      </div>
    </>
  );
}
