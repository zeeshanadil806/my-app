"use client"
import { Button } from "./ui/button"
import { useState } from "react"

type ProductsProps = {
    id:number;
    name:string;
    price:number;
}

type CartProps = {
    product:ProductsProps;
    quantity:number;
    total:number;
}
export default function ShoppingCartt() {
    const products:ProductsProps[] = [
        {id :1 , name:"Product 1" , price:10},
        {id :2 , name:"Product 2" , price:20},
        {id :3 , name:"Product 3" , price:30},
        {id :4 , name:"Product 4" , price:40},
    ]
    const [cart , setCart] = useState<CartProps[]>([]);
    function addToCart(product:ProductsProps){
        const availableItems = cart.findIndex(item => item.product.id === product.id);
        if(availableItems !== -1){
            const updatedCart = [...cart];
            updatedCart[availableItems].quantity++;
            updatedCart[availableItems].total = updatedCart[availableItems].quantity * updatedCart[availableItems].product.price;
            setCart(updatedCart);
        }else{
            setCart([...cart , {product , quantity:1 ,total:product.price}]);
        }
    }
  return (
    <div>
        <h1 className="text-4xl font-bold">Products : </h1>
        {products.map(product => (
            <div key={product.id}>
                {product.name} - ${product.price}
                <Button onClick={() => addToCart(product)}>Add to cart</Button>
            </div>
        ))}
        <h1 className="text-4xl font-bold">Cart : </h1>
        {cart.map(item => (
            <div key={item.product.id}>
                {item.product.name} - ${item.total} - Quantity : {item.quantity}
            </div>
        ))}
    </div>
  )
}