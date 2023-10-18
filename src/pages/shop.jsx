import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../components/CategoriesPreview";
import Category from "../pages/category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
