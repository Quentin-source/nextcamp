import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/Home.module.css";

const Vocabulary = (props) => {
  console.log(props);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tutoriel Next.Js</title>
      </Head>
      <div className={styles.container}>
        <h1>Vocabulaire</h1>
        <table className={styles.tableau}>
          <tbody>
            {props.array.map((word) => (
              <tr key={word.en}>
                <td>{word.en}</td>
                <td>{word.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Vocabulary;

export async function getStaticProps() {
  const data = await import("../../data/vocabulary.json");
  const array = data.vocabulary;
  return {
    props: {
      array,
    }
  };
}
