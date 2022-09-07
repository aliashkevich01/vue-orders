import products from "../orders.json";
export const orders = JSON.parse(JSON.stringify(products));

export default function findOrdersById(id) {
  const result = [];
  for (let i = 0; i < orders.length; i++) {
    if (id == orders[i].client_id) {
      result.push(orders[i]);
    }
  }
  return result;
}
