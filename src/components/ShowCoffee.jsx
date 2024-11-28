import React, { useState } from "react";
import Coffee from "./Coffee";
import { useLoaderData } from "react-router-dom";

const ShowCoffee = () => {
  const coffees = useLoaderData();

  // better use tanstack query or similar packages
  const [loadedCoffees, setLoadedCoffees] = useState(coffees);

  return (
    <div>
      <div className='p-8 bg-[url("/images/more/1.png")]'>
        <header className="text-center mb-8">
            <p className="text-sm">--- Sip & Savor ---</p>
          <h1 className="text-4xl font-bold text-gray-800">
            Our Popular Products
          </h1>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Add Coffee
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 w-3/4 mx-auto">
          {loadedCoffees.map((coffee) => (
            <Coffee loadedCoffees={loadedCoffees}
            setLoadedCoffees={setLoadedCoffees}
            coffee={coffee}
             key={coffee._id}></Coffee>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCoffee;
