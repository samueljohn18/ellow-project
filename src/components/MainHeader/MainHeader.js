import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./MainHeader.module.css";

function MainHeader(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>hello {props.email}</h1>
      </header>
      <nav className={styles.nav}>
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/home/dashboard">Dashboard</Link>
        </div>
        <div>
          <Link to="/home/list">List</Link>
        </div>
        <div>
          <button onClick={props.onLogout}>Logout</button>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default MainHeader;
