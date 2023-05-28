import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; 
import { CreateContainer, MainContainer, Header } from "./components";
import { useDispatch } from 'react-redux';
import { fetchFoodItems } from './redux/products/productSlice';

const App = () => {

  const dispatch = useDispatch();  
  useEffect(() => {
      dispatch(fetchFoodItems());
  }, [dispatch]);

  return (
    <AnimatePresence exitBeforeEnter>
        <div className='w-screen h-auto flex flex-col bg-primary'>
            <Header />

            <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
                <Routes>
                    <Route path="/*" element={<MainContainer />}/>
                    <Route path="/createItem" element={<CreateContainer />}/>
                </Routes>
            </main>
        </div>
    </AnimatePresence>
);
};

export default App;