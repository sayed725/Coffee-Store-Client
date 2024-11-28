import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Coffee = ({ coffee, loadedCoffees, setLoadedCoffees }) => {
  const { _id, name, chef, taste, photo, supplier } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = loadedCoffees.filter(coffee => coffee._id !== _id)
              setLoadedCoffees(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="flex bg-[#F5F4F1] px-4 rounded-lg py-6">
      <img src={photo} alt={name} className="w-20 h-20 object-contain mr-4" />
      <div className="flex-1">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-700">Chef: {chef}</p>
        <p className="text-gray-700">Taste: {taste}</p>
      </div>
      <div className="flex flex-col justify-between ml-2">
        <button className="text-yellow-500 hover:text-yellow-600">
          <FaEye />
        </button>
        <Link
          to={`updateCoffee/${_id}`}
          className="text-blue-500 hover:text-blue-600"
        >
          <FaPen />
        </Link>
        <button
          onClick={() => {
            handleDelete(_id);
          }}
          className="text-red-500 hover:text-red-600"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Coffee;
