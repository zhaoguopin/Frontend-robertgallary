/*
 * @Author: yf.eva.yifan@gmail.com
 * @Date: 01-05-2022 13:49:13
 * @LastEditTime: 01-07-2022 21:06:38
 * @FilePath: \robot-gallery\src\interfaces\RobotProps.ts
 * @Description: 
 */

export interface RobotProps {
  id: number;
  name: string;
  email: string;
    addToCart: (id, name) => void;
//     removeCart: (id) => void;
}