// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products,promotionCode){
  let totalprice = (products[0].price*products[0].quantity)
                +(products[1].price*products[1].quantity)
                +(products[2].price*products[2].quantity)
  if (promotionCode === "SALE20"){
    return totalprice -= totalprice*0.2
  } else if (promotionCode === "SALE50"){
    return totalprice -= totalprice*0.5
  }else {
    return totalprice
  }
}

console.log(calculateTotalPrice(products,promotionCode))