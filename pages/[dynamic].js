import { useRouter } from "next/router";
import Head from "next/head";

const Test = () => {
  //init router
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.dynamic}</title>
      </Head>
      <h1>Page {router.query.dynamic}</h1>
    </div>
  );
};

export default Test;
