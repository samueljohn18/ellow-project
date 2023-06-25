import styles from "./ShopItemsList.module.css";

function ShopItemsList(props) {
  return (
    <div className={styles.container}>
      <ul className={styles.item}>
        <li>
          <h2>{props.item.name}</h2>
        </li>
        <li>
          <h3>{props.item.description}</h3>
        </li>
        <li>
          <h3>₹{props.item.price}</h3>
        </li>
      </ul>
    </div>
  );
}

export default ShopItemsList;

