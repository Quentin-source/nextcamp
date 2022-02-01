import styles from "../styles/Home.module.css";

const Bitcoin = (props) => {
  console.log(props.results.market_data.current_price.eur);

  return (
    <div className={styles.container}>
      <h1>
        Le cour du Bitcoin {props.results.market_data.current_price.eur} euros
      </h1>
    </div>
  );
};

export default Bitcoin;

export async function getServerSideProps(context) {
  console.log(context);

  const datas = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
  const results = await datas.json();

  return {
    props: {
      results,
    },
  };
}
