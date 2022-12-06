import React, { useEffect, useState } from "react";

const Footer = () => {
  const [enableVariants, setEnableVariants] = useState(false);

  const [colorsArray, setColors] = useState(["Red", "Green", "Blue", "Yellow"]);
  const [sizeArray, setSizes] = useState(["S", "M", "L", "XL"]);
  const [colorInput, setColorInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");

  const VariantUI = () => {
    return (
      <div>
        <div className="products__create__main--variants--col mb-2">
          <div>
            <label>Size</label>
            <input
              id="optionName"
              type="text"
              className="input mt-1"
              placeholder="e.g S, M, L, XL "
              onBlur={addSizeHandler}
              value={sizeInput}
              onChange={(e) => {
                setSizeInput(e.target.value);
              }}
            />
          </div>
          <div className="products__create__main--variants--col--optionValues">
            <label>Values</label>
            <div className="products__create__main--variants--col--optionValues--wrapper mt-1">
              <ul className="mb-1 products__create__main--variants--col--optionValues--tagsList mt-1 list-unstyled">
                {sizeArray.map((data, index) => {
                  return (
                    <li
                      className="products__create__main--variants--col--optionValues--tagsItem"
                      key={index}
                    >
                      {data}
                      <i
                        className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"
                        onClick={() => {
                          sizeElementRemoveHandler(index);
                        }}
                      ></i>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Variant Options 2 --> */}
        <div className="products__create__main--variants--col mb-2">
          <div>
            <label>Color</label>
            <input
              id="optionName"
              type="text"
              className="input mt-1"
              placeholder="e.g Red "
              value={colorInput}
              onBlur={addColorHandler}
              onChange={(e) => {
                setColorInput(e.target.value);
              }}
            />
          </div>
          <div className="products__create__main--variants--col--optionValues">
            <label>Values</label>
            <div className="products__create__main--variants--col--optionValues--wrapper mt-1">
              <ul className="mb-1 products__create__main--variants--col--optionValues--tagsList mt-1 list-unstyled">
                {colorsArray.map((data, index) => {
                  return (
                    <li
                      className="products__create__main--variants--col--optionValues--tagsItem"
                      key={index}
                    >
                      {data}
                      <i
                        className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"
                        onClick={() => {
                          colorElementRemoveHandler(index);
                        }}
                      ></i>
                    </li>
                  );
                })}
                {/* <li className="products__create__main--variants--col--optionValues--tagsItem">
            Red
            <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
          </li> */}
              </ul>
              {/* <div className="products__create__main--variants--col--optionValues--inputTagsWrapper">
          <input
            id="optionNameTag"
            type="text"
            className="products__create__main--variants--col--optionValues--input"
            placeholder="e.g Separate options with comma"
          />
        </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const colorElementRemoveHandler = (indexToRemove) => {
    const filteredValue = colorsArray.filter((data, index) => {
      return indexToRemove !== index;
    });
    setColors(filteredValue);
  };

  const sizeElementRemoveHandler = (indexToRemove) => {
    const filteredValue = sizeArray.filter((data, index) => {
      return indexToRemove !== index;
    });

    setSizes(filteredValue);
  };

  const addColorHandler = (e) => {
    let input = e.target.value.toLowerCase();
    if (input.length > 2) {
      let temp = colorsArray;
      temp.push(input);
      setColors(temp);
      setColorInput("");
    }
  };
  const addSizeHandler = (e) => {
    let input = e.target.value.toUpperCase();
    if (input.length > 0) {
      let temp = sizeArray;
      temp.push(input);
      setSizes(temp);
      setSizeInput("");
    }
  };

  return (
    <>
      <div className="products__create__main--variants card py-2 px-2 bg-white mt-2">
        <h3 className="mb-2">Variants</h3>
        <label className="checkbox-container">
          This product has multiple options, like different sizes or colors
          {/* <input type="checkbox" checked="checked" /> */}
          <input
            type="checkbox"
            checked={enableVariants}
            onClick={() => {
              setEnableVariants(!enableVariants);
            }}
          />
          <span className="checkmark"></span>
        </label>
        <hr />

        {enableVariants && <VariantUI />}
      </div>
      {/* <hr /> */}

      {/* <button className="btn btn-light">Add another option</button> */}

      {/* <div className="products__create__main--variants--preview bg-white">
        <h4 className="px-2 py-2">PREVIEW</h4>

        <div className="products__create__main--variants--preview--heading px-2 pb-2">
          <p>
            <strong>Variant</strong>
          </p>
          <p>
            <strong>Price</strong>
          </p>
          <p>
            <strong>SKU</strong>
          </p>
        </div>

        <ul className="products__create__main--variants--preview--list">
          <li className="products__create__main--variants--preview--item">
            <p>Small</p>
            <input type="number" className="input" placeholder="PHP 0.00" />
            <input type="text" className="input" placeholder="SKU" />
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default Footer;
