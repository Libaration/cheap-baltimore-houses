import styles from "../styles/NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavMain}>
        <h1 className="text-3xl font-bold underline">CheapBaltimoreHouses</h1>
      </div>
    </div>
  );
};

export default NavBar;
