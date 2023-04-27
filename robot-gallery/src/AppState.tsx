/*
 * @Author: yf.eva.yifan@gmail.com
 * @Date: 01-04-2022 15:54:20
 * @LastEditTime: 01-04-2022 19:37:59
 * @FilePath: \robot-gallery\src\AppState.tsx
 * @Description:
 */
import React, { useState } from "react";
interface AppStateValue {
  userName: string;
  shoppingCart: { items: { id: number; name: string }[] };
}
const defaultContextValue: AppStateValue = {
  userName: "Ivan Zhang",
  shoppingCart: {
    items: [],
  },
};
export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue);
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  );
};
