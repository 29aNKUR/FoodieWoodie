import React from "react";
import { updatePaymentMode } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const PaymentCard = ({payment}) => {



  const dispatch = useDispatch();
  const handlePaymentMode = (payment) => {
    dispatch(updatePaymentMode(payment));
  };
  return (
    <div className="flex flex-col items-center shadow border-2 border-gray mr-4 w-52 h-[8rem] mt-3 p-3 hover:scale-105 delay-400 transition-all">
      <h2 className="font-bold text-title text-base">{payment.mode}</h2>
      <p className="text-sm text-bio text-ellipsis">
        {payment.means}
      </p>
      <button
        className="border bg-green-600 px-3 py-1 text-white mt-1 text-sm"
        onClick={() => handlePaymentMode(payment)}
      >
        DELIVER HERE
      </button>
    </div>
  );
};

export default PaymentCard;