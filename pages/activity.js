import Head from "next/head";
import { useRouter } from "next/router";
import style from "../styles/Home.module.css";

const Activity = (props) => {
  const router = useRouter();
  console.log(props);

  return (
    <>
      <Head>
        <title>{`Page ${router.query.slug}`}</title>
      </Head>
      <div className={style.container}>
        <h1>{props.quote.activity}</h1>
      </div>
    </>
  );
};

export default Activity;

export async function getStaticProps() {
  const data = await fetch("http://www.boredapi.com/api/activity/");
  const quote = await data.json();
  return {
    props: {
      quote,
    },
    revalidate: 10,
  };
}
