import React, { useState, useEffect } from "react";

import "../App.css";
// This component is for getting list of categories(places) in the selected city
export default function Category(props) {
  const [categoryCity, setCategoryCity] = useState([]);

  useEffect(() => {
    if (props.selectCity === "Select City") return;
    async function fetchMyAPI() {
      let response = await fetch(
        `https://mini-london-guide-fullstack-challange.onrender.com/${props.selectCity}`
      );
      response = await response.json();
      setCategoryCity(response);
    }

    fetchMyAPI().catch(console.error);
  }, [props.selectCity]);
  return (
    <div
      className="btn-group mr-2"
      role="group"
      aria-label="Basic radio toggle button group"
      onChange={(e) => props.setSelectedCategory(e.target.value)}
    >
      {/* <h5>Categories: </h5> */}
      {categoryCity.map((elmCategory, index) => (
        <div key={index} className="btn-container">
          <input
            type="radio"
            className="btn-check "
            name="categoryCity"
            id={index}
            key={index + 2000}
            value={elmCategory}
          />
          <label
            className="btn btn-outline-primary"
            htmlFor={index}
            key={index + 1000}
          >
            {elmCategory}
          </label>
        </div>
      ))}
    </div>
  );
}

//   //component for Crads for selected catgories
//   //  const CardSelectedCategory=()=>{

//     setCategoryList( combinedData[selectCity][selectedCategory])

//     return(
//       <div className="conatinerCard">
//         <div className="row">
// {CategoryList.map( card => (
// <Card className="col-lg-4 col-md-6 mb-5 mb-lg-2 m-3">
//         <Card.Title>{card.name}</Card.Title>
//         <hr/>
//         <Card.Text>
//           {card.address}
//         </Card.Text>
//         <Card.Text>Phone: {card.phone}</Card.Text>
//         <Card.Link href={card.website}>Website</Card.Link>
//     </Card>
//       ))}
//       </div>
//       </div>
//     )
//      }
