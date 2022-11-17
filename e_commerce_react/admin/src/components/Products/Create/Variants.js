import React from "react";

const Footer = () => {
  return (
    <>
      <div className="products__create__main--variants card py-2 px-2 bg-white mt-2">
        <h3 className="mb-2">Variants</h3>
        <label className="checkbox-container">
          This product has multiple options, like different sizes or colors
          {/* <input type="checkbox" checked="checked" /> */}
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <hr />

        {/* <!-- Variant Options 1 --> */}
        <div className="products__create__main--variants--col mb-2">
          <div>
            <label>Option 1</label>
            <input
              id="optionName"
              type="text"
              className="input mt-1"
              placeholder="e.g Color / Size "
            />
          </div>
          <div className="products__create__main--variants--col--optionValues">
            <label>Values</label>
            <div className="products__create__main--variants--col--optionValues--wrapper mt-1">
              <ul className="mb-1 products__create__main--variants--col--optionValues--tagsList mt-1 list-unstyled">
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Large
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Medium
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Small
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Large
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Large
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Extra Small
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Medium
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Extra Large
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Small
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
              </ul>
              <div className="products__create__main--variants--col--optionValues--inputTagsWrapper">
                <input
                  id="optionNameTag"
                  type="text"
                  className="products__create__main--variants--col--optionValues--input"
                  placeholder="e.g Separate options with comma"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Variant Options 2 --> */}
        <div className="products__create__main--variants--col mb-2">
          <div>
            <label>Option 2</label>
            <input
              id="optionName"
              type="text"
              className="input mt-1"
              placeholder="e.g Color / Size "
            />
          </div>
          <div className="products__create__main--variants--col--optionValues">
            <label>Values</label>
            <div className="products__create__main--variants--col--optionValues--wrapper mt-1">
              <ul className="mb-1 products__create__main--variants--col--optionValues--tagsList mt-1 list-unstyled">
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Red
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Yellow
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Blue
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Green
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Black
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
                <li className="products__create__main--variants--col--optionValues--tagsItem">
                  Pink
                  <i className="products__create__main--variants--col--optionValues--tagsCLose fas fa-times"></i>
                </li>
              </ul>
              <div className="products__create__main--variants--col--optionValues--inputTagsWrapper">
                <input
                  id="optionNameTag"
                  type="text"
                  className="products__create__main--variants--col--optionValues--input"
                  placeholder="e.g Separate options with comma"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <button className="btn btn-light">Add another option</button>
      </div>
      <div className="products__create__main--variants--preview bg-white">
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
      </div>
    </>
  );
};

export default Footer;
