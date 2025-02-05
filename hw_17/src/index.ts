//1
function calculateTotal(price: number, quantity: number, discount: number = 0): number {
  return (price * quantity) * (1 - discount / 100);
}

console.log(calculateTotal(5, 10, 100));

//2
let idNumber: number | string = 2;
let idString: number | string = "id"
function displayId(id: number | string): void {
  console.log(typeof id === "string" ? id.toUpperCase() : id * 10);
}

displayId(idNumber);
displayId(idString);

//3
type TStatus = "pending" | "shipped" | "delivered"
interface IOrder {
  orderId: string;
  amount: number;
  status: TStatus;
}
const orders: IOrder[] = [
  { orderId: "1", amount: 1, status: "pending" },
  { orderId: "2", amount: 5, status: "pending" },
  { orderId: "3", amount: 3, status: "shipped" },
  { orderId: "4", amount: 13, status: "delivered" },
]

function filterOrdersByStatus(orders: IOrder[], status: string): IOrder[] {
  return orders.filter((e) => e.status === status);
}

console.log(filterOrdersByStatus(orders, "pending"))

//4
const productInfo: [string, number, number] = [
  "apple", 30, 100
]

const inventory: { [title: string]: number } = {
  "apple": 50,
  "banana": 100,
  "orange": 30,
}

function updateStock(inventory: { [title: string]: number }, productInfo: [string, number, number]): { [title: string]: number } {
  const [productName, quantity,] = productInfo
  if (inventory[productName] !== undefined) {
    inventory[productName] += quantity;
  } else {
    inventory[productName] = quantity;
  }
  return inventory;
}

console.log(updateStock(inventory, productInfo));
