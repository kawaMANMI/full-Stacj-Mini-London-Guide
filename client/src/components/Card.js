import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "../App.css";

export default function Card(props) {
  //   const [selectedCategory, setselectedCategory] = useState("");
  //   const [CategoryList, setCategoryList] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        `https://mini-london-guide-fullstack-challange.onrender.com/${props.selectCity}/${props.selectedCategory}`
      );
      response = await response.json();
      setCategoryList(response);
      console.log(CategoryList);
    }

    fetchMyAPI().catch(console.error);
  }, [props.selectCity]);
  return <div></div>;
}
