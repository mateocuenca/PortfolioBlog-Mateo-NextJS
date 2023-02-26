import Head from "next/head";
import globalStyles from "src/styles/Global.module.css";

const Page = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name="description" content="Page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.svg" />
      </Head>
      <main className={globalStyles.container}>
        <div className={globalStyles.errorContainer}>
          <h1>404</h1>
          <p>Oops! Page not found</p>
        </div>
      </main>
    </>
  );
};

export default Page;
