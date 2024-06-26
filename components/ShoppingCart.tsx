"use client"
import { useState } from "react"
import { Button } from "./ui/button"

type ProductsProps = {
  id:number;
  product:string;
  price:number;
}
type CartProps = {
  product:ProductsProps;
  quantity:number;
  total:number;
}
export default function ShoppingCart() {
  const [cart ,setCart] = useState<CartProps[]>([]);
  const items = [
    {id:1 , product:"Product 1" , price:10 },
    {id:2 , product:"Product 2" , price:20 },
    {id:3 , product:"Product 3" , price:30 }
  ];
  function addToCart(product:ProductsProps){
    const availableItems = cart.findIndex(item => item.product.id === product.id);
    if(availableItems !== -1){
      const updatedCart = [...cart];
      updatedCart[availableItems].quantity++;
      updatedCart[availableItems].total = updatedCart[availableItems].quantity * product.price;
      setCart(updatedCart);
    }else{
      setCart([...cart , {product , quantity :1 , total:product.price}])
    }
  }
  function itemDecrease(product:ProductsProps){
    const updatedCart = cart.map((item) => {
      if (item.product.id === product.id && item.quantity > 0) {
        item.quantity--;
        item.total = item.quantity * product.price;
      }
      return item;
    });

    // Remove the item from the cart when quantity is 0
    const filteredCart = updatedCart.filter(
      (item) => item.product.id !== product.id || item.quantity > 0
    );

    setCart(filteredCart);
  }
  function itemIncrease(product:ProductsProps){
    const availableItems = cart.findIndex(item => item.product.id === product.id);
    const updatedCart = [...cart];
      updatedCart[availableItems].quantity++;
      updatedCart[availableItems].total = updatedCart[availableItems].quantity * product.price;
      setCart(updatedCart);
  }
  return (
    <div>
      <h1 className="text-4xl font-bold">Products :</h1>
      {items.map(product => (
        <div key={product.id}>
          {product.product} - ${product.price}
          <Button onClick={() => addToCart(product)}>Add to cart</Button>
        </div>
      ))}
      <h1 className="text-4xl font-bold">Cart :</h1>
      {cart.map(item => (
        <div key={item.product.id} className="flex items-center">
          <p>{item.product.product} - ${item.total} -</p> <div className="flex items-center"><p> Quantity: </p><Button onClick={() => itemDecrease(item.product)}>-</Button><p>{item.quantity}</p><Button onClick={() => itemIncrease(item.product)}>+</Button></div>  
        </div>
      ))}
    </div>
  )
}
