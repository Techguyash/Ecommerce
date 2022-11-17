import React from "react";

const SideBar = (props) => {
  return (
    <div className="singleOrder__sidebar">
      <div className="singleOrder__sidebar--notes bg-white card py-2 px-3">
        <h4>Notes</h4>
        <p className="mt-2">{props.customerData.notes}</p>
      </div>
      <div className="singleOrder__sidebar--customer bg-white card py-2 px-3 mt-2">
        <div className="dflex justify-content-between align-items-center">
          <h4>Customer</h4>
          <div className="singleOrder__sidebar--customer--imgWrapper">
            <img
              className="singleOrder__sidebar--customer--img"
              src={`${props.customerData.profilePic}`}
              alt="avatar name"
            />
          </div>
        </div>

        <div className="mb-2">
          <a >{props.customerData.name}</a>
        </div>

        <hr />

        <p className="my-2">
          <strong>CONTACT INFORMATION</strong>
        </p>
        <a >{props.customerData.email}</a>
        <p className="my-2">{props.customerData.phone}</p>

        <hr />
        <p className="my-2">
          <strong>SHIPPING ADDRESS</strong>
        </p>
        <p>{props.customerData.name}</p>
        <p className="my-2">{props.customerData.address}</p>

        <hr />
        <p className="my-2">
          <strong>BILLING ADDRESS</strong>
        </p>
        <p>{props.customerData.billingAddress}</p>
      </div>
    </div>
  );
};

export default SideBar;
