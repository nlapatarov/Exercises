import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"


function Shop() {

  const [elements, setElements] = useState([]);

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
    const items = await data.json();

    setElements(items.data)
  
  }

  return (
    <div>
      {
        elements.map(element => <h1 key={element.itemId}>
          <Link> {element.item.name} </Link>
        </h1>)
      }
    </div>
  );
}

export default Shop;






