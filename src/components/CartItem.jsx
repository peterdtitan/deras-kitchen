import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { decreaseAmount, increaseAmount, removeFromCart } from "../redux/cart/cartSlice";

const CartItem = ({ item, setFlag, flag }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt="item"
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          ₺ {parseFloat(item?.price) * item.amount}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => dispatch(decreaseAmount(item.id))}
        >
          <BiMinus className="text-gray-50"/>
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {item.amount}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => dispatch(increaseAmount(item.id))}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>

      {/* remove product button */}
      <motion.div
        whileTap={{ scale: 0.75 }}
        onClick={() => dispatch(removeFromCart(item.id))}
        className="group ml-2 cursor-pointer relative -top-10 -right-4"
      >
        <AiOutlineClose size={20} className="text-red-600 bg-white rounded-full p-1 group-hover:text-red-500" />
      </motion.div>
    </div>
  );
};

export default CartItem;