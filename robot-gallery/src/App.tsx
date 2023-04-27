import React, { useState, useEffect, useContext } from "react";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import logo from "./assets/imgs/logo.svg";
import ShoppingCart from "./components/ShoppingCart";
import { appContext } from "./AppState";
import RobotDiscount from "./components/RobotDiscount";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [robertGallery, setRobertGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const value = useContext(appContext);
  // Use effect: the second parameter is used to
  // specify when the useEffect will be called.
  // if we don't add this parameter, it is equivlent to
  // the life cycle componentDidUpdate which might cause
  // dead loop. if we use [] it is equivlent to componentDidMount
  useEffect(() => {
    document.title = `Shopping Cart ${value.shoppingCart.items.length} items`;
  }, [value.shoppingCart.items]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        // .then((response) => response.json())
        // .then((data) => setRobertGallery(data));
        const data = await response.json();

        setRobertGallery(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>React 17 Robot ecomerce platform</h1>
      </div>
      {/* <button
        onClick={() => {
          setCount(count + 1);
          // by using the UseState hooks, even you put two SetCount statement here
          // it will only increase 1. if you want both statments take effects, we
          // need to use UseEffect hook
          // setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count {count}</span> */}
      <ShoppingCart />
      {error && <div>{error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robertGallery.map((r, index) =>
            index % 2 === 0 ? (
              <RobotDiscount id={r.id} email={r.email} name={r.name} />
            ) : (
              <Robot id={r.id} email={r.email} name={r.name} />
            )
          )}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default App;
