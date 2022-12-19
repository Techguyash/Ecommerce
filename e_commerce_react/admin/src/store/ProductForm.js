import { createContext, useState } from "react";

const ProductFormCtx = createContext();

const ProductFormCtxProvider = ({ children }) => {
  const [productName, setProductName] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [brandNameInput, setBrandNameInput] = useState("");
  const [featuredProduct, setFeaturedProduct] = useState(false);

  return (
    <ProductFormCtx.Provider
      value={{
        productName,
        setProductName,
        descriptionInput,
        setDescriptionInput,
        brandNameInput,
        setBrandNameInput,
        featuredProduct,
        setFeaturedProduct,
      }}
    >
      {children}
    </ProductFormCtx.Provider>
  );
};

export { ProductFormCtx, ProductFormCtxProvider };
