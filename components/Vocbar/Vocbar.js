//Setup
import Link from "next/link";

//libraries
import { v4 as uuidv4 } from 'uuid';

//Components

//styles
import style from "./Vocbar.module.css";

const Vocbar = ({ items }) => {
  return (
    <ul className={style.main}>
        {items.map((item) => (
          <li key={uuidv4()}>
            
              <Link href={`/list/${Object.keys(item)}`}>
                <a>{Object.keys(item)}</a>
              </Link>
           
          </li>
        ))}
    </ul>
  );
};

export default Vocbar;
