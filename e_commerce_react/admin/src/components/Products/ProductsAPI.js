import axios from "../../components/axiosInstance";

export const fetchProducts = (setAvailableProducts) => {
  axios
    .get("/products")
    .then((response) => {
      if (response.data.data.length > 0) {
        // console.log(response.data.data);
        setAvailableProducts(response.data.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchProductById = (id) => {
  axios
    .get(`/products/{id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
