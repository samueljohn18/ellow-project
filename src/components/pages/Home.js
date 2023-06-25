import { useState } from "react";
import ShopItemsList from "../ShopItemsList";
import styles from "./Home.module.css";

function Home(props) {
  const [showText, setShowText] = useState(false);
  const [position, setPosition] = useState(null);

  const shopItems = [
    {
      name: "Apple",
      description:
        "A crisp and juicy fruit with a sweet-tart flavor. Comes in various varieties like Granny Smith, Gala, or Fuji.",
      price: 77,
    },
    {
      name: "Carrot",
      description:
        "A crunchy and nutritious root vegetable known for its vibrant orange color and earthy taste.",
      price: 46,
    },
    {
      name: "Banana",
      description:
        "A curved fruit with a creamy texture and a slightly sweet taste. Known for its high potassium content.",
      price: 38,
    },
    {
      name: "Spinach",
      description:
        "A leafy green vegetable that is packed with vitamins and minerals. Can be used in salads, smoothies, or cooked dishes.",
      price: 230,
    },
    {
      name: "Orange",
      description:
        "A citrus fruit with a refreshing and tangy flavor. Rich in vitamin C and commonly enjoyed as a snack or in juices.",
      price: 107,
    },
    {
      name: "Tomato",
      description:
        "A versatile fruit (often referred to as a vegetable) with a juicy texture and a slightly acidic, sweet-tart taste. Used in various dishes and salads.",
      price: 62,
    },
    {
      name: "Blueberries",
      description:
        "Small, round berries with a sweet and tangy flavor. Packed with antioxidants and commonly used in desserts, smoothies, or as a topping.",
      price: 551,
    },
    {
      name: "Cucumber",
      description:
        "A cool and refreshing vegetable with a mild flavor. Often used in salads, sandwiches, or as a snack.",
      price: 126,
    },
    {
      name: "Pineapple",
      description:
        "A tropical fruit with a sweet and tangy taste. Known for its spiky exterior and juicy, golden flesh.",
      price: 394,
    },
    {
      name: "Bell Pepper",
      description:
        "A crunchy and colorful vegetable available in various hues like green, red, or yellow. Adds a crisp texture and mild flavor to dishes.",
      price: 158,
    },
  ];

  function readHandler(index) {
    setPosition(index);
    setShowText(true);
  }

  function backHandler() {
    setShowText(false);
  }

  return (
    <div className={styles.container}>
    {!showText ? (
      <>
        <h2 className={styles.title}>List of Fruits and Vegetables</h2>
        <ul className={styles.ul}>
          {shopItems.map((items, index) => {
            return (
              <li className={styles.item} key={index}>
                <h2>{items.name}</h2>
                <h3>{items.description}</h3>
                <h3>₹{items.price}</h3>
                <button onClick={() => readHandler(index)}>Read more</button>
              </li>
            );
          })}
        </ul>
      </>
    ) : (
      <div className={styles.item}>
        <ShopItemsList item={shopItems[position]} onBack={backHandler} />
        <div className={styles.backButton}>
          <button onClick={backHandler}>Back</button>
        </div>
      </div>
    )}
  </div>
);
}

export default Home;