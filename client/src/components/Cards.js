import React, { useState, useEffect } from "react";
import "../App.css";

export default function Cards(props) {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    if (!props.selectedCategory) {
      console.log(props.selectedCategory);
      return;
    }
    async function fetchMyAPI() {
      let response = await fetch(
        `https://mini-london-guide-fullstack-challange.onrender.com/${props.selectCity}/${props.selectedCategory}`
      );
      response = await response.json();
      setCategoryList(response);
    }

    fetchMyAPI().catch(console.error);
  }, [props.selectCity, props.selectedCategory]);
  return (
    <div class="py-6">
      <div class="container ">
        <div className="row hidden-md-up gy-4">
          {categoryList.map((catElm, index) => (
            <div className="col-md-4 gx-10" key={index + 1000}>
              <div
                className="card shadow p-3 mb-5 bg-white border border-4  rounded-top"
                key={index + 2000}
              >
                <div className="card-body" key={index + 3000}>
                  <h5 className="card-title">{catElm.name}</h5>
                  <hr />
                  <p className="card-text">{catElm.address}</p>
                  <p className="card-text">Phone: {catElm.phone}</p>
                  <a href={catElm.website} className="btn btn-primary">
                    "Website"
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
