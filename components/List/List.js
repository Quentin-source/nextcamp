import styles from "../../styles/Home.module.css";

const List = ({items}) => {
  
  return (
    <table className={styles.tableau}>
      <tbody>
        {items.map((item) => (
          <tr key={item.en}>
            <td>{item.en}</td>
            <td>{item.fr}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;

