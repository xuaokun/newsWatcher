/*
 * @Description:
 * @Author: akxu
 * @Date: 2021-10-11 17:59:50
 * @LastEditTime: 2021-10-11 18:06:56
 * @LastEditors: AKXU-NB1
 * @LastEditContent:
 */
const themeColors = [
  "#33b2df",
  "#546E7A",
  "#d4526e",
  "#13d8aa",
  "#A5978B",
  "#2b908f",
  "#f9a3a4",
  "#90ee7e",
  "#f48024",
  "#69d2e7"
];

function getRandomColor() {
  return themeColors[Math.floor(Math.random() * themeColors.length)];
}
export { getRandomColor };
