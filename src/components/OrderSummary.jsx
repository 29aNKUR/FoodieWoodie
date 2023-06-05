import React from "react";
import { useSelector } from "react-redux";
import useItemTotal from "../utils/useItemTotal";
import ItemQuantity from "./ItemQuantity";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const deliveryAddress = useSelector((store) => store.cart.deliveryAddress);

  const paymentMode = useSelector((store) => store.cart.paymentMode);

  const cartItems = useSelector((store) => store.cart.items);

  const getItemsTotal = useItemTotal();

  return (
    <div className="border flex justify-center align-middle items-center">
      <div className=" p-5 w-auto shadow-lg">
        <div className="flex justify-between ">
          <h1 className="font-bold text-base">Order Summary</h1>
        </div>

        {Object.values(cartItems).map((item, index) => {
          return (
            <div
              className="flex justify-between w-full my-[1rem] text-sm"
              key={index}
            >
              <div className="w-2/5">
                <h1 className="">{item?.name}</h1>
              </div>

              <div className="1/5">
                <ItemQuantity item={item} />
              </div>

              <div>
                <h2 className="2/5">
                  {" "}
                  {/* if price of an item shows NaN */}
                  {!item?.price
                    ? (item?.variantsV2?.pricingModels[0].price / 100) *
                      item?.quantity
                    : (item?.price / 100) * item?.quantity}
                </h2>
              </div>
            </div>
          );
        })}
        <hr />
        <div className="flex justify-between my-1">
          <span className="font-bold">To Pay</span>
          {getItemsTotal()}
        </div>

        <div className="my-8">
          <h1 className="font-bold">Delivery Address</h1>

          <h2 className="font-bold text-md">{deliveryAddress?.addressType}</h2>
          <h3 className="text-sm">{deliveryAddress?.addressDescription}</h3>
        </div>

        <div className="my-2 py-3">
          <h1 className="font-bold my-1">Payment</h1>

          <h2 className="font-bold text-md">{paymentMode?.mode}</h2>
          <h3 className="text-sm">{paymentMode?.means}</h3>
        </div>

        <div>
          <div className="flex justify-center my-3">
            {paymentMode?.mode && paymentMode?.mode?.includes("Online") ? (
              <Link to="/razorpay">
                <button className="border border-yellow-400 bg-yellow-400 text-white p-[0.5rem]">
                  PLACE ORDER
                </button>
              </Link>
            ) : (
              alert("asdfasdf")
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
