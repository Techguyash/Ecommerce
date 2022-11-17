import React from "react";
import Card from "../UI/Cards/Card";
import "../genericStyles.css";
import "./styles.css";
import Table from "../UI/Table/Table";
import HeaderRow from "../UI/Table/HeaderRow";
import DataRow from "../UI/Table/DataRow";

const cardData = [
  {
    key: 1,
    title: "Total Sales",
    count: "108,110.00",
  },
  {
    key: 2,
    title: "Total Order",
    count: "422",
  },
  {
    key: 3,
    title: "Total Customer",
    count: "153",
  },
];

const OrdersData = [
  {
    key: 11,
    col1Data: "5 JUL 20 3:37pm",
    col2Data: "#012 Apple St. General Santos City",
    col3Data: "12",
    col4Data: "3,500",
  },
  {
    key: 12,
    col1Data: "5 JUL 20 3:37pm",
    col2Data: "#012 Apple St. General Santos City",
    col3Data: "12",
    col4Data: "13,500",
  },
  {
    key: 13,
    col1Data: "5 JUL 20 3:37pm",
    col2Data: "#012 Apple St. General Santos City",
    col3Data: "12",
    col4Data: "13,500",
  },
  {
    key: 14,
    col1Data: "5 JUL 20 3:37pm",
    col2Data: "#012 Apple St. General Santos City",
    col3Data: "12",
    col4Data: "13,500",
  },
];

const unPadidData = [
  {
    key: 1,
    col1Data: "#9321303",
    col2Data: "rayjenscode@gmail.com",
    col3Data: "COD",
    col4Data: "950",
  },
  {
    key: 2,
    col1Data: "#9321303",
    col2Data: "rayjenscode@gmail.com",
    col3Data: "COD",
    col4Data: "950",
  },
  {
    key: 3,
    col1Data: "#9321303",
    col2Data: "rayjenscode@gmail.com",
    col3Data: "COD",
    col4Data: "950",
  },
  {
    key: 4,
    col1Data: "#9321303",
    col2Data: "rayjenscode@gmail.com",
    col3Data: "COD",
    col4Data: "950",
  },
];

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="home">
          <h2 className="text-secondary mb-2">Overview Dashboard</h2>
          {/* TOP CARDS  */}
          <div className="home__cards">
            {cardData.map((data) => {
              return (
                <Card key={data.key} title={data.title} count={data.count} />
              );
            })}
          </div>
          <Table titleBold="16 Orders" title="to Fullfill">
            <HeaderRow
              col1="Date"
              col2="Address"
              col3="Qty"
              col4="Total"
            ></HeaderRow>
            {OrdersData.map((data) => {
              return (
                <DataRow
                  key={data.key}
                  col1Data={data.col1Data}
                  col2Data={data.col2Data}
                  col3Data={data.col3Data}
                  col4Data={data.col4Data}
                ></DataRow>
              );
            })}
          </Table>
          <Table titleBold="7 Unpaid Orders" title="">
            <HeaderRow
              col1="Order#"
              col2="Email"
              col3="Type"
              col4="Total"
            ></HeaderRow>
            {unPadidData.map((data) => {
              return (
                <DataRow
                  key={data.key}
                  col1Data={data.col1Data}
                  col2Data={data.col2Data}
                  col3Data={data.col3Data}
                  col4Data={data.col4Data}
                ></DataRow>
              );
            })}
          </Table>
        </div>
      </div>
    </>
  );
};

export default Home;
