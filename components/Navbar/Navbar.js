import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import style from './Navbar.module.css';

const Navbar = (props) => {
  const router = useRouter();
 

  return (
    <>
      <nav className={style.main}>
      <Link href="/">
          <a>Accueil</a>
        </Link>
        <Link href="/vocabulary">
          <a>Vocabulaire</a>
        </Link>
        <Link href="/activity">
          <a>Activité</a>
        </Link>
        <Link href="/list">
          <a>Liste</a>
        </Link>
        <Link href="/bitcoin">
          <a>Bitcoin</a>
        </Link>
      </nav>
      {props.children}
    </>
  );
};

export default Navbar;
