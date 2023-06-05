import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemQuantity from "./ItemQuantity";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import useItemTotal from "../utils/useItemTotal";
import { clearCart } from "../utils/cartSlice";
import emptyCart from "../assets/img/emptyCart.jpg";
import { DELIVERY_ADDRESS_LIST, PAYMENT_MODE } from "../config";
import AddressCard from "./AddressCard";
import PaymentCard from "./PaymentCard";

const Cart = () => {
  const deliveryAddress = useSelector((store) => store.cart.deliveryAddress);

  const paymentMode = useSelector((store) => store.cart.paymentMode);

  console.log(deliveryAddress, "address");
  console.log(paymentMode, "payment");

  const { user } = useUserAuth();

  console.log(user);

  const dispatch = useDispatch();

  const getItemsTotal = useItemTotal();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div>
      {getItemsTotal() < 1 ? (
        <div>
          <div className="flex justify-center my-10">
            <img
              className="h-[200px] w-[200px] "
              src={emptyCart}
              alt="empty cart"
            />
          </div>
          <div className="flex justify-center">
            <h1>Your cart is empty!</h1>
          </div>
          <div className="flex justify-center my-[0.5rem] font-bold">
            <Link to="/">
              <button className="border p-5 bg-orange-400 text-white">
                SEE RESTAURANTS NEAR YOU
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {user?.email ? (
            <div className="flex justify-between m-5 p-5">
              <div className="border shadow-lg p-5 flex justify-between">
                <div className="">
                  <h1 className="font-bold text-xl">Delivery Address</h1>
                  {DELIVERY_ADDRESS_LIST.map((address) => (
                    <div className="flex">
                      <AddressCard address={address} />
                    </div>
                  ))}
                </div>
                <div className="">
                  <h1 className="font-bold text-xl">Payment</h1>
                  {PAYMENT_MODE.map((payment) => (
                    <PaymentCard payment={payment} />
                  ))}
                </div>
              </div>

              <div className=" p-5 w-auto h-screen shadow-lg">
                <div className="flex justify-between ">
                  <div>
                    <h1 className="font-bold text-base">Cart Items</h1>
                  </div>
                  <div>
                    <button
                      className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm"
                      onClick={() => handleClearCart()}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>

                {Object.values(cartItems).map((item, index) => {
                  return (
                    <div
                      className="flex justify-between w-full my-[1rem] text-sm"
                      key={index}
                    >
                      <div className="w-3/5">
                        <h1 className="">{item?.name}</h1>
                      </div>

                      <div className="1/5">
                        <ItemQuantity item={item} />
                      </div>

                      <div>
                        <h2 className="1/5">
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

                  <h2 className="font-bold text-md">
                    {deliveryAddress?.addressType}
                  </h2>
                  <h3 className="text-sm">
                    {deliveryAddress?.addressDescription}
                  </h3>
                </div>

                <div className="my-2 py-3">
                  <h1 className="font-bold my-1">Payment</h1>

                  <h2 className="font-bold text-md">{paymentMode?.mode}</h2>
                  <h3 className="text-sm">{paymentMode?.means}</h3>
                </div>

                <div className="flex justify-center my-3">
                  <Link to="ordersummary">
                    <button className="border border-yellow-400 bg-yellow-400 text-white p-[0.5rem]">
                      PROCEED TO PAYMENT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between m-5 p-5 h-[500px] shadow-lg">
              <div className="border p-5 shadow-lg">
                <h1 className="font-bold text-xl">Account</h1>
                <p>
                  To place your order log in to your existing account or sign
                  up.
                </p>
                <p className="my-[1rem] flex justify-center">
                  Have an account already?
                </p>
                <Link to="/login">
                  <button className="mx-64 border p-4 border-orange-400 rounded-md">
                    LOG IN
                  </button>
                </Link>
                <div className="flex my-[1rem]">
                  <hr />
                  <h1 className="mx-72">OR</h1>
                  <hr />
                </div>
                <p className="mx-56 my-[1rem]">New to FoodieWoodie? </p>
                <Link to="/signup">
                  <button className="mx-64 border p-4 bg-orange-400 text-white rounded-md">
                    SIGN UP
                  </button>
                </Link>
              </div>

              <div className="border shadow-lg p-5">
                <div className="flex justify-between ">
                  <div>
                    <h1 className="font-bold text-base">Cart Items</h1>
                  </div>
                  <div>
                    <button
                      className="border p-2 rounded-lg bg-red-600 text-white"
                      onClick={() => handleClearCart()}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>

                {Object.values(cartItems).map((item, index) => {
                  return (
                    <div
                      className="flex justify-between w-full my-[1rem]"
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
                <div className="flex justify-between my-[2rem]">
                  <span className="font-bold">To Pay</span>
                  {getItemsTotal()}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
