/*
 * @Author: yf.eva.yifan@gmail.com
 * @Date: 01-05-2022 13:40:21
 * @LastEditTime: 01-05-2022 14:57:33
 * @FilePath: \robot-gallery\src\components\withAddToCart.tsx
 * @Description:
 */

import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "../interfaces/RobotProps";

export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProps>
) => {
  //return class extends React.Component { }
  // here we shouldn't specify the props type
  // to be RobotProps because it will ask this
  // this property to be passed in when parent
  // components
  return (props) => {
    const setState = useContext(appSetStateContext);
    const addToCart = (id, name) => {
      if (setState) {
        setState((state) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          };
        });
      }
    };
    // TODO: the remove cart function has issue, I need to re-visit it.
    const removeCart = (id) => {
      if (setState) {
        setState((state) => {
          var index = state.shoppingCart.items.findIndex((i) => i.id === id);
          var newItems = state.shoppingCart.items.splice(index, 1);
          return {
            ...state,
            shoppingCart: {
              items: newItems,
            },
          };
        });
      }
    };
    return (
      <ChildComponent
        {...props}
        addToCart={addToCart}
        removeCart={removeCart}
      />
    );
  };
};
