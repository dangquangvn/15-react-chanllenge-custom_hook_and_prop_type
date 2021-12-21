import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
// import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  console.log("hello");
  return (
    data.reduce((acc, item) => {
      const price = item.fields.price;
      console.log("price", price);
      if (price >= acc) {
        acc = price;
      }
      return acc;
    }, 0) / 100
  );
  // console.log(test);
};

const Index = () => {
  const { data: products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  //useMemo
  const mostExpensiveMemo = useMemo(() => calculateMostExpensive(products), [
    products
  ]);

  // const calculateMostExpensive = useCallback(
  //   (data) => {
  //     console.log("hello");
  //     return (
  //       data.reduce((acc, item) => {
  //         const price = item.fields.price;
  //         console.log("price", price);
  //         if (price >= acc) {
  //           acc = price;
  //         }
  //         return acc;
  //       }, 0) / 100
  //     );
  //     // console.log(test);
  //   },
  //   [products ]
  // );

  const addToCart = useCallback(() => {
    console.log("addToCart called");
    setCart(cart + 1);
  }, [cart]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1>Cart : {cart}</h1>
      {/* <h1>Most Expensive: ${calculateMostExpensive(products)}</h1> */}
      <h1>Most Expensive: ${mostExpensiveMemo}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("big list called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("single item called");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  );
};
export default Index;
