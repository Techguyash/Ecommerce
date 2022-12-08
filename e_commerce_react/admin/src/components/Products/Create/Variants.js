import React, { useState } from "react";

const Footer = ({ formData }) => {
  const [enableVariants, setEnableVariants] = useState(false);
  const [colorsArray, setColors] = useState(["Red", "Green", "Blue", "Yellow"]);
  const [sizeArray, setSizes] = useState(["S", "M", "L", "XL"]);
  const [sizeInput, setsizeInput] = useState("");
  const [colorInput, setColorInput] = useState("");

  // Setting default size and colors to array of strings

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
      if (enableVariants) formData.colorVariants = colorsArray;
    }
  };
  const addSizeHandler = (e) => {
    let input = e.target.value.toUpperCase();
    if (input.length > 1) {
      let temp = sizeArray;
      temp.push(input);
      setSizes(temp);
      setsizeInput("");
      if (enableVariants) formData.sizeVariants = sizeArray;
    }
  };

  return (
    <>
      <div className="products__create__main--variants card py-2 px-2 bg-white mt-2">
        <h3 className="mb-2">Variants</h3>
        <label className="checkbox-container">
          This product has multiple options, like different sizes or colors
          <input
            type="checkbox"
            checked={enableVariants}
            onChange={() => {
              setEnableVariants(!enableVariants);
            }}
          />
          <span className="checkmark"></span>
        </label>
        <hr />

        {/* Variants starts here */}
        {enableVariants && (
          <div>
            <div className="products__create__main--variants--col mb-2">
              <div>
                <label>Size</label>
                <input
                  id="optionName"
                  type="text"
                  className="input mt-1"
                  placeholder="e.g S, M, L, XL"
                  value={sizeInput}
                  onBlur={addSizeHandler}
                  onChange={(e) => {
                    setsizeInput(e.target.value);
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
