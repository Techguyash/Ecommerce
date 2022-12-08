import { useState, useEffect } from "react";
import axios from "../../axiosInstance";
const SideBar = (props) => {
  const [collectionData, setcollectionData] = useState([]);

  function fetchCollectionData() {
    if (collectionData.length < 1)
      axios
        .get("/category")
        .then((res) => {
          setcollectionData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }

  useEffect(() => {
    fetchCollectionData();
  }, []);

  return (
    <div className="products__create__sidebar">
      {/* <!-- Product Organization --> */}
      <div className="card py-2 px-2 bg-white">
        <h3>Organization</h3>

        {/* <!-- Product Type --> */}
        <div className="my-3">
          <p>Product Type</p>
          <div className="dflex justify-content-between align-items-center">
            <input
              className="inputAdd my-1"
              type="text"
              placeholder="e.g Shirts"
            />
            <button className="inputAdd__Btn my-1">
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <select
            className="inputSelect"
            name=""
            id=""
            onChange={(val) => {
              let id = val.target.value;
              // console.log(id);
              let category = collectionData.filter((data) => {
                if (id == data.id) {
                  return data;
                }
              });
              props.formData.category = category[0];
              console.log(props.formData);
            }}
            onClick={fetchCollectionData}
          >
            {collectionData.map((data) => {
              return (
                <option value={data.id} key={data.id}>
                  {data.name}
                </option>
              );
            })}
            {/* <option value="">Shirts</option>
            <option value="">Appliace</option>
            <option value="">Pants</option>
            <option value="">Watch</option>
            <option value="">Gadgets</option>
            <option value="">Phone</option> */}
          </select>
        </div>
        <hr />

        {/* <!-- Product Vendor --> */}
        <div className="my-3">
          <p>Vendor</p>
          <div className="dflex justify-content-between align-items-center">
            <input
              className="inputAdd my-1"
              type="text"
              placeholder="e.g Samsung"
            />
            <button className="inputAdd__Btn my-1">
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <select className="inputSelect" name="" id="">
            <option value="">Samsung</option>
            <option value="">Nokia</option>
            <option value="">iPhone</option>
            <option value="">Huawei</option>
            <option value="">Nike</option>
            <option value="">Addidas</option>
          </select>
        </div>
      </div>

      {/* <!--  Collections --> */}
      <div className="mt-2 card py-2 px-2 bg-white">
        <h3>Collections</h3>

        <div className="inputBrowse mt-3">
          <i className="inputBrowse__icon fas fa-search"></i>
          <input
            type="text"
            placeholder="Search for collections"
            className="inputBrowse__input"
          />
        </div>

        <div className="mt-2">
          {/* <label className="checkbox-container">
            Appliances
            <input type="checkbox" checked="checked" />
            <span className="checkmark"></span>
          </label> */}
          <label className="checkbox-container">
            Furniture
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Hardware Tools
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Home Interior
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Doors & Mouldings
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Electrical
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Paint & Sundries
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Plumbing
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Sanitary wares
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Tiles
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
