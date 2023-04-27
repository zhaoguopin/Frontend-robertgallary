/*
 * @Author: yf.eva.yifan@gmail.com
 * @Date: 01-07-2022 20:58:19
 * @LastEditTime: 01-07-2022 21:04:00
 * @FilePath: \robot-gallery\src\components\useAddToCart.tsx
 * @Description:
 */

import { useContext } from "react";
import { appSetStateContext } from "../AppState";

export const useAddToCart = () => {
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
  return addToCart;
};
