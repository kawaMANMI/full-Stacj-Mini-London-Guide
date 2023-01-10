import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import '../App.css';

export default function RadioCities() {
  const [citiesList, setCitiesList] = useState([]);
  const [selectCity, setSelectCityt] = useState("Dropdown button");
  const [categoryCity, setCategoryCity] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");
  const [CategoryList, setCategoryList] = useState([]);
  useEffect(() => {
    async function fetchMyAPI1() {
      let response = await fetch(
        "https://mini-london-guide-fullstack-challange.onrender.com/citiesName"
      );
      response = await response.json();
      setCitiesList(response);
    }

    fetchMyAPI1().catch(console.error);
  }, []);

  function change(e) {
    // a.persist();
    //  console.log(`you chosen: ${e}`);
    setSelectCityt(e);
  }

  useEffect(() => {
    async function fetchMyAPI2() {
      let response = await fetch(
        `https://mini-london-guide-fullstack-challange.onrender.com/${selectCity}`
      );
      response = await response.json();
      setCategoryCity(response);
    }

    fetchMyAPI2().catch(console.error);
  }, [selectCity]);


//Component for all existed categories in the selected city
  const Category = () => {
    return (
<div className="btn-group" role="group" aria-label="Basic radio toggle button group" >
{categoryCity.map( (elmCategory, index)=>(
  <>
    <label className="btn btn-outline-primary" htmlFor={index} key={index}>{elmCategory}</label>
  <input type="radio" className="btn-check" name="categoryCity" id={index}  key={elmCategory} value={elmCategory} onChange={ (e)=> setselectedCategory(e.target.value)} />
  </>
))}

</div>
    );
  };



  //component for Crads for selected catgories
   const CardSelectedCategory=()=>{
    
    // useEffect(() => {
    //   async function fetchMyAPI3() {
    //     let response = await fetch(
    //       `https://mini-london-guide-fullstack-challange.onrender.com/${selectCity}/${selectedCategory}`
    //     );
    //     response = await response.json();
    //     setCategoryList(response);
    //     console.log(CategoryList)
    //   }
  
    //   fetchMyAPI3().catch(console.error);
    // }, [selectCity]);

    const harrow = require("./data/Harrow.json");
    const heathrow = require("./data/Heathrow.json");
    const stratford = require("./data/Stratford.json");
    const combinedData = {
      harrow: harrow,
      heathrow: heathrow,
      stratford: stratford,
    };
    setCategoryList( combinedData[selectCity][selectedCategory])

    return(
      <div className="conatinerCard">
        <div className="row"> 
{CategoryList.map( card => (
<Card className="col-lg-4 col-md-6 mb-5 mb-lg-2 m-3"> 
        <Card.Title>{card.name}</Card.Title>
        <hr/>
        <Card.Text>
          {card.address}
        </Card.Text>
        <Card.Text>Phone: {card.phone}</Card.Text>
        <Card.Link href={card.website}>Website</Card.Link>
    </Card>
      ))}
      </div>
      </div>
    )
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
      {categoryCity.length > 0 ? <Category /> : null}
      { (selectCity!=="" && selectedCategory!=="")?  <CardSelectedCategory/>: null}
    </>
  );
}



