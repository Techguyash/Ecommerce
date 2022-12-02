import React from "react";

const CurrencySymbol = ({ price }) => {
  return (
    <span>
      &#8377;
      {new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 7 }).format(
        price
      )}
    </span>
  );
};

export default CurrencySymbol;
