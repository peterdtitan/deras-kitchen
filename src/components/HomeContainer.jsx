import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import Jollof from '../img/jollof-rice-salad-chicken.jpeg';
import FriedRice from '../img/fried-rice-chicken.jpeg';
import { heroData } from '../utils/data';


const HomeContainer = () => {
  return (
<section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
    <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
      <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full' >
        <p className='text-base text-orange-500 font-semibold' >Bike Delivery</p>

        <div className='w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <img src={Delivery} className='w-full h-full object-contain' alt='delivery' />
        </div>

      </div>

      <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'
        >The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Lefke Area!</span>
      </p>

      <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      </p>

      <button type="button" 
        className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg 
        hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'
        >Order Now
      </button>
    </div>

    <div className='py-2 flex-1 flex items-center relative'>
        <img src={HeroBg} className='ml-auto h-400 
          w-full lg:w-auto lg:h-650' 
          alt='hero-bg' 
        />
        <div className='w-full h-full absolute top-0 left-0 flex 
        flex-wrap gap-4 items-center justify-center lg:px-32 py-4'>
            {heroData && heroData.map(n => (
                <div key={n.id} className='lg:w-190 p-4 bg-cardOverlay 
                  drop-shadow-lg backdrop-blur-md rounded-3xl flex flex-col 
                  items-center justify-center'
                >
                    <img src={n.imageSrc} className='w-20 lg:w-40 -mt-10 
                      lg:-mt-20 rounded-full' alt='food'>
                    </img>
                    <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>

                    <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3' >{n.desc}</p>

                    <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>₺</span>{n.price}</p>
                </div>
            ))}
        </div>
    </div>

</section>
  );
}

export default HomeContainer