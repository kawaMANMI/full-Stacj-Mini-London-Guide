import React, { useState, useEffect } from "react";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "../App.css";

export default function Category(props) {
  const [categoryCity, setCategoryCity] = useState([]);

  useEffect(() => {
    if (props.selectCity === "Select City") return;
    async function fetchMyAPI2() {
      let response = await fetch(
        `https://mini-london-guide-fullstack-challange.onrender.com/${props.selectCity}`
      );
      response = await response.json();
      setCategoryCity(response);
    }

    fetchMyAPI2().catch(console.error);
  }, [props.selectCity]);
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      {categoryCity.map((elmCategory, index) => (
        <div key={index}>
          <label
            className="btn btn-outline-primary"
            htmlFor={index}
            key={index + 1000}
          >
            {elmCategory}
          </label>
          <input
            type="radio"
            className="btn-check"
            name="categoryCity"
            id={index}
            key={index + 2000}
            value={elmCategory}
          />
        </div>
      ))}
    </div>
  );
}

// // //Component for all existed categories in the selected city
// //   const Category = () => {
// //     return (
// // <div className="btn-group" role="group" aria-label="Basic radio toggle button group" >
// // {categoryCity.map( (elmCategory, index)=>(
// //   <>
// //     <label className="btn btn-outline-primary" htmlFor={index} key={index}>{elmCategory}</label>
// //   <input type="radio" className="btn-check" name="categoryCity" id={index}  key={elmCategory} value={elmCategory} onChange={ (e)=> setselectedCategory(e.target.value)} />
// //   </>
// // ))}

// // </div>
// //     );
// //   };

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
