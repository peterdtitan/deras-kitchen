import React from 'react';
import Delivery from '../img/delivery.png';

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full' >
          <p className='text-base text-orange-500 font-semibold' >Bike Delivery</p>

          <div className='w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery} className='w-full h-full object-contain' alt='delivery' />
          </div>

        </div>

        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'
          >The Fastest Delivery in <span className='text-orange-600 text-[3rem]'>Our City!</span>
        </p>

        <p className='text-base text-textColor text-center md:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        </p>

        <button type="button" 
          className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg 
          hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'
          >Order Now
        </button>
      </div>

      <div className='py-2 flex-1'></div>
    </div>
  )
};


export default MainContainer