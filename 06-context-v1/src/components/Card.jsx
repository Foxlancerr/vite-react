import React from 'react';
import useTheme from '../context/theme';

const Card = () => {
  let {defaultTheme} = useTheme()
  return (
    <div className='p-4 rounded-lg bg-white dark:bg-black w-3/5'>
      <div className='overflow-hidden h-[250px] rounded-lg object-center bg-red-600'>
        <img src="https://images.unsplash.com/photo-1698819718444-0d59d1011410?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
      </div>
        <h1 className='dark:text-white text-2xl font-bold mt-2'>Sale Promo</h1>
        <p className='dark:text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <button className='bg-red-700 py-2 px-4 mt-2 rounded-lg text-white  hover:bg-red-500 hover:text-black font-bold'>BUY NOW</button>
    </div>
  );
}

export default Card;
