import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import Category from "./Category";
import Cards from "./Cards";
import "../App.css";

export default function RadioCities() {
  const [citiesList, setCitiesList] = useState([]);
  const [selectCity, setSelectCity] = useState("Select City");
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    async function fetchMyAPI1() {
      let response = await fetch(
        "cd"
      );
      response = await response.json();
      setCitiesList(response);
    }

    fetchMyAPI1().catch(console.error);
  }, []);

  function change(e) {
    // a.persist();
    // console.log(`you chosen: ${e}`);
    setSelectCity(e);
  }

  return (
    <>
      <DropdownButton
        id="dropdown-basic-button"
        title={selectCity}
        onSelect={change}
      >
        {citiesList.map((city, index) => (
          <Dropdown.Item eventKey={city} key={index}>
            {city}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {selectCity !== "Select City" ? (
        <Category
          selectCity={selectCity}
          setSelectedCategory={setSelectedCategory}
        />
      ) : null}
      {selectedCategory ? (
        <Cards selectCity={selectCity} selectedCategory={selectedCategory} />
      ) : null}
    </>
  );
}

// { (selectCity!=="" && selectedCategory!=="")?  <CardSelectedCategory/>: null} */}
