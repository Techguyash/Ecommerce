import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import emptyImg from "../../../assets/busy-marketing.svg";
import Pagination from "../../UI/Pagination";
import Product from "./Product";
import { ProductsContext } from "../../../store/ProductsContext";
import { useEffect } from "react";
//Uncomment this to see the available product view

// let availableProducts = [
//   {
//     id: "1",
//     productName: "Super Extreme Nike Sports",
//     type: "Shoes",
//     count: "3",
//     img: "2.jpg",
//   },
//   {
//     id: "2",
//     productName: "Super Extreme Nike Shirt",
//     type: "Clothing",
//     count: "2",
//     img: "8.jpg",
//   },
// ];

const EmptyProducts = (props) => {
  let navigate = useNavigate();
  const navigateProductAdd = () => {
    navigate("/products/create");
  };

  return (
    <div className="products__empty ">
      <h2 className="my-2">Products</h2>
      <hr />
      <div className="products__empty__content">
        <div className="products__empty__content--info my-auto">
          <h2 className="my-2">Add and manage your products</h2>
          <p className="products__empty__content--info--description my-2">
            Get closer to your sale by adding products, or import your existing
            products inventory.
          </p>
          <button
            to="/products/create"
            className="products__empty__content--btn my-2 mr-1 btn btn-secondary"
            onClick={navigateProductAdd}
          >
            Add Product
          </button>
          <button className="products__empty__content--btn my-2 btn btn-light">
            Find Products
          </button>
        </div>

        <div className="products__empty__content--img my-auto">
          <img className="w-100" src={emptyImg} alt="busy" />
        </div>
      </div>
    </div>
  );
};

const AvailableProducts = ({
  products,
  activateUnpublishedTab,
  toggleTabs,
}) => {
  let navigate = useNavigate();

  const navigateProductAdd = () => {
    navigate("/products/create");
  };

  return (
    <>
      <div className="products__list">
        <div className="products__titlebar dflex justify-content-between align-items-center mt-2">
          <div className="products__titlebar--item">
            <h1 className="my-1">Products</h1>
          </div>
          <div className="products__titlebar--item">
            <button
              className="btn btn-secondary ml-1"
              onClick={navigateProductAdd}
            >
              Create Products
            </button>
          </div>
        </div>
      </div>
      <div className="table card my-3">
        <div className="table--filter mb-2">
          <span className="table--filter--collapseBtn orders__table--filter--collapseBtn">
            <i className="fas fa-ellipsis-h"></i>
          </span>
          <div className="table--filter--listWrapper orders__table--filter--listWrapper">
            <ul className="table--filter--list list-unstyled dflex justify-content-start">
              <li onClick={toggleTabs}>
                <p
                  className={`table--filter--link ${
                    !activateUnpublishedTab && "table--filter--link--active"
                  }`}
                >
                  All Products
                </p>
              </li>
              <li onClick={toggleTabs}>
                <p
                  className={`table--filter--link ${
                    activateUnpublishedTab && "table--filter--link--active"
                  }`}
                >
                  Unpublish
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="table--search my-3">
          <div className="table--search--wrapper">
            <select className="table--search--select py-1 px-2" name="" id="">
              <option className="table--search--option" value="">
                Filter
              </option>
              <option className="table--search--option" value="">
                Collections A-Z
              </option>
              <option className="table--search--option" value="">
                Collections Z-A
              </option>
              <option className="table--search--option" value="">
                Most Viewed
              </option>
              <option className="table--search--option" value="">
                Less Viewed
              </option>
            </select>
            <span className="table--search--select--arrow">
              <i className="fas fa-caret-down"></i>
            </span>
          </div>
          <div className="relative">
            <i className="table--search--input--icon fas fa-search absolute"></i>
            <input
              className="table--search--input py-1 pl-4 pr-2"
              type="text"
              placeholder="Search orders"
            />
          </div>
        </div>
        <div className="table--heading mt-2 products__list__heading">
          <p className="table--heading--col1">image</p>
          <p className="table--heading--col2">Product</p>

          <p className="table--heading--col4">Collection</p>
          <p className="table--heading--col3">Inventory</p>

          <p className="table--heading--col5">actions</p>
        </div>

        {products.map((data) => {
          return <Product key={data.productId} data={data} />;
        })}

        {/* <!-- Paginate --> */}
        <Pagination />
        {/* <!-- End Paginate --> */}
      </div>
    </>
  );
};

const ProductsView = (props) => {
  const { products, unpublishedProducts } = useContext(ProductsContext);
  const [activateUnpublishedTab, setActivateUnpublishedTab] = useState(false);

  const toggleTabs = () => {
    setActivateUnpublishedTab(!activateUnpublishedTab);
  };

  return (
    <div className="products">
      {products.length < 1 ? (
        <EmptyProducts />
      ) : (
        <AvailableProducts
          products={activateUnpublishedTab ? unpublishedProducts : products}
          activateUnpublishedTab={activateUnpublishedTab}
          toggleTabs={toggleTabs}
        />
      )}
    </div>
  );
};

export default ProductsView;
