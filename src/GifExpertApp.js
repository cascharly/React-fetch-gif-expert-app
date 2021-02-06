import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGrid } from "./components/GridGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   setCategories([...categories,'Hunter X'])       // Opcion 1
  //   // setCategories( cats=> [...cats,'Hunter X'] )    // Opcion 2
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <GridGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};
