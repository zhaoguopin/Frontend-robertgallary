/*
 * @Author: yf.eva.yifan@gmail.com
 * @Date: 12-10-2021 15:49:17
 * @LastEditTime: 01-04-2022 19:56:27
 * @FilePath: \robot-gallery\src\components\ShoppingCart.tsx
 * @Description:
 */
import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../AppState";
interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    // if we don't use fat arrow function
    // then we can use bind to make sure this
    // is pointing to the ShoppingCart class

    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target", (e.target as HTMLElement).nodeName); //e.target 描述的是发生事件的元素
    console.log("e.currentTarget", e.currentTarget); // e.currentTarget 描述的是事件处理绑定的元素
    if ((e.target as HTMLElement).nodeName.toLowerCase() === "span") {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };
  render(): React.ReactNode {
    return (
      <appContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cartContainer}>
              <button className="" onClick={this.handleClick}>
                <FiShoppingCart />
                <span>Cart {value.shoppingCart.items.length} Items</span>
              </button>
              <div
                className={styles.cartDropDown}
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  {value.shoppingCart.items.map((i) => (
                    <li key={i.id}>{i.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </appContext.Consumer>
    );
  }
}

export default ShoppingCart;
