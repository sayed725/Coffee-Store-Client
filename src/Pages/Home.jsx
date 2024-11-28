import React, { useState } from 'react';
import ShowCoffee from '../components/ShowCoffee';



const Home = () => {


    return (
        <div>
            <h2 className='text-4xl text-center font-bold'>Welcome Coffee home</h2>
            <ShowCoffee></ShowCoffee>
        </div>
    );
};

export default Home;