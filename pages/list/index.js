//setup
import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";

//components
import Vocbar from "../../components/Vocbar/Vocbar";

//Styles
import style from "../../styles/Home.module.css";

const Liste = (props) => {
  
//   const {vocabulary, getVocabulary}  = useState(props.array);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tutoriel Next.Js</title>
      </Head>
      <div className={style.container}>
        <h1>Liste de Vocabulaire!</h1>

        <Vocbar items={props.array} />

      </div>
    </>
  );
};

export default Liste;

export async function getStaticProps() {
    const data = await import("../../data/pathsvoc.json");
    const array = data.englishList;
    return {
      props: {
        array,
      },
    };
  }



