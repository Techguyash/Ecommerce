import React, { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary";
import Products from "./Products";
import SideBar from "./SideBar";
import TrackingModal from "./TrackingModal";

const singleOrderData = {
  order: {
    id: "1043",
    date: "July 17, 2020 3:28 am",
    deliveryVendor: "LBC Tracking",
    trackingId: "53458503945",
  },
  customer: {
    name: "Zander Ford",
    profilePic: "../../assets/avatar.jpg",
    email: "zander@gmail.com",
    phone: "+91-876524312",
    address:
      "Rayjens Code Apple St. Obrero 9500 General Santos City Philippines",
    billingAddress:
      "Rayjens Code Apple St. Obrero 9500 General Santos City Philippines",
    notes: "Deliver to my neighbour",
  },
  products: {
    productsData: [
      {
        id: "100",
        badge: "29",
        img: "1.jpg",
        productName: "Nike Super Sports",
        price: "1800",
        qty: "28",
      },
      {
        id: "200",
        badge: "3",
        img: "2.jpg",
        productName: "Nike Super Sports",
        price: "10",
        qty: "29",
      },
      {
        id: "102",
        badge: "29",
        img: "3.jpg",
        productName: "Nike Super Sports",
        price: "800",
        qty: "22",
      },
    ],
  },
};

const SingleOrder = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addTrackingModalHandler = () => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  };

  useEffect((addTrackingModalHandler) => {}, [modalIsOpen]);

  var subTotal = 0;
  const calcSubTotal = () => {
    {
      subTotal = 0;
      singleOrderData.products.productsData.map((data) => {
        var total = data.price * data.qty;
        subTotal = subTotal + total;
      });
      return subTotal;
    }
  };
  subTotal = calcSubTotal();
  const goBackHandler = () => {
    console.log("clicked");
  };

  return (
    <>
      <div className="singleOrder">
        <div className="singleOrder__header">
          <div className="breadcramb mt-3" onClick={goBackHandler}>
            <i className="fas fa-angle-left mr-1"></i>Orders
          </div>
          <div className="singleOrder__title mt-1 dflex justify-content-start align-items-center">
            <h1 className="mr-2">#{singleOrderData.order.id}</h1>
            <p>{singleOrderData.order.date}</p>
          </div>

          <div className="singleOrder__actionbar mt-1">
            <ul className="list-unstyled dflex justify-content-start align-items-center">
              <li>
                {/* <!-- Select Btn Option --> */}
                <button className="selectBtnFlat">
                  <i className="mr-1 fas fa-print"></i>
                  Print
                </button>
                {/* <!-- End Select Btn Option --> */}
              </li>
              <li>
                {/* <!-- Select Btn Option --> */}
                <button className="selectBtnFlat ml-1">
                  <i className="mr-1 fas fa-reply"></i>
                  Refund
                </button>
                {/* <!-- End Select Btn Option --> */}
              </li>
              <li>
                {/* <!-- Select Btn Option --> */}
                <button className="selectBtnFlat ml-1">
                  <i className="mr-1 fas fa-pencil-alt"></i>
                  Edit
                </button>
                {/* <!-- End Select Btn Option --> */}
              </li>
              <li className="mr-1">
                {/* <!-- Select Btn Option --> */}
                <button className="selectBtnFlat">
                  More Actions
                  <i className="ml-1 selectBtnFlat__arrow fas fa-caret-down"></i>
                  <div className="selectBtnFlat__options">
                    <ul className="selectBtnFlat__options--list">
                      <li className="selectBtnFlat__options--item">
                        Edit Tracking
                      </li>
                      <li className="selectBtnFlat__options--item">
                        Track Shipment
                      </li>
                      <li className="selectBtnFlat__options--item">
                        Cancel Fulfillment
                      </li>
                    </ul>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="singleOrder__cardWrapper mt-2">
          <div className="singleOrder__main">
            <div className="singleOrder__main--card card py-2 px-3">
              <div className="singleOrder__main--card--heading dflex justify-content-start align-items-center mb-2">
                <div className="singleOrder__main--card--icon--fulfilled">
                  <i className="fas fa-check text-white"></i>
                </div>

                <p className="ml-1">
                  <strong>Fulfilled (38)</strong> #{singleOrderData.order.id}
                </p>
              </div>
              <div className="singleOrder__main--card--trackInfo">
                <p>{singleOrderData.order.deliveryVendor}</p>
                <a >{singleOrderData.order.trackingId}</a>
              </div>
              <div className="singleOrder__main--card--content">
                <ul className="singleOrder__main--card--itemList list-unstyled">
                  {/* <!-- Order item 1 --> */}
                  {singleOrderData.products.productsData.map((data) => {
                    return (
                      <Products
                        img={data.img}
                        badge={data.badge}
                        productName={data.productName}
                        price={data.price}
                        qty={data.qty}
                        total={data.qty * data.price}
                        key={data.id}
                      />
                    );
                  })}
                </ul>
              </div>

              <div className="dflex justify-content-end mt-2">
                <button className="btn btn-secondary ml-1">
                  Mark as fulfilled
                </button>

                <button
                  onClick={addTrackingModalHandler}
                  className="btn btn-secondary ml-1 singleOrder__main--modal--addEditTrackingBtn"
                >
                  Add Tracking
                </button>

                <button className="selectBtn ml-1">
                  More
                  <i className="ml-1 selectBtn__arrow fas fa-caret-down"></i>
                  <div className="selectBtn__options hide-item">
                    <ul className="selectBtn__options--list">
                      <li className="selectBtn__options--item">
                        Edit Tracking
                      </li>
                      <li className="selectBtn__options--item">
                        Track Shipment
                      </li>
                      <li className="selectBtn__options--item">
                        Cancel Fulfillment
                      </li>
                    </ul>
                  </div>
                </button>
                {/* <!-- End Select Btn Option --> */}
              </div>
            </div>

            <OrderSummary
              paymentStatus="paid"
              itemCount={singleOrderData.products.productsData.length}
              subTotal={subTotal}
              paidByCustomer={subTotal}
            />
          </div>
          <SideBar customerData={singleOrderData.customer} />
        </div>
        {modalIsOpen && (
          <TrackingModal addTrackingModalHandler={addTrackingModalHandler} />
        )}
      </div>
    </>
  );
};

export default SingleOrder;
