//setup
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

//components
import List from "../../components/List/List";

//Styles
import style from "../../styles/Home.module.css";

const Dynlist = (props) => {
  //   console.log(props.slug);

  if (!props.activeList) {
    return <h1>Chargement</h1>;
  }

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tutoriel Next.Js</title>
      </Head>
      <div className={style.container}>
        <h1>Liste de Vocabulaire!</h1>
        {/* Ici on met la premiere lettre en capitale */}
        <h2>{props.slug.charAt(0).toUpperCase() + props.slug.slice(1)}</h2>
        <List items={props.activeList.data} />
      </div>
    </>
  );
};

export default Dynlist;

//on définit tous les chemins qu'on va rendre en static
export async function getStaticPaths() {
  const data = await import("../../data/voccat.json");
  const paths = data.englishList.map((path) => ({
    params: { liste: path.name },
  }));
  console.log(paths);

  return {
    // paths: paths,
    paths: [{ params: { liste: "words" } }],
    //avec l'option fallback on ne rend que les pages demandées
    fallback: "blocking",
  };
}

// on determine les données qu'on récupère en props pour chaque page (coontext)
export async function getStaticProps(context) {
  const slug = context.params.liste;
  const data = await import("../../data/voccat.json");

  const activeList = data.englishList.find((list) => list.name === slug);

  if (!activeList) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
      activeList,
    },
  };
}
