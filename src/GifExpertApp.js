import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  // const handleAdd = () => {
  //   setCategories([...categories,'Hunter X'])       // Opcion 1
  //   // setCategories( cats=> [...cats,'Hunter X'] )    // Opcion 2
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
