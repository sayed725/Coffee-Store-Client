import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCofee = () => {

    const coffee = useLoaderData();
    const { _id, name, chef, taste, photo, supplier, category, details } = coffee;



    const handleUpdateCoffee = (e)=>{
        e.preventDefault()

        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const updatedCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(updatedCoffee)

        // send data to the server 
        fetch(`http://localhost:5001/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })

        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            }
        })



    }





    return (
        <div className='lg:w-3/4 mx-auto bg-[url("/images/more/11.png")]'>
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Update Existing Coffee Details</h1>
                <p className="py-6">
                It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
            </div>
            <div className=" bg-[#F4F3F0] w-full shrink-0">
                <form onSubmit={handleUpdateCoffee} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="coffee name" defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name='chef' placeholder="chef name" defaultValue={chef} className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' placeholder="coffee supplier" defaultValue={supplier} className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' placeholder="taste name" defaultValue={taste} className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="coffee Category" defaultValue={category} className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Coffee Details" defaultValue={details} className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo url" defaultValue={photo} className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C] hover:bg-yellow-500">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    


    );
};

export default UpdateCofee;