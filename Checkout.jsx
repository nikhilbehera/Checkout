import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <p className="mt-2 text-gray-600">Complete Your order Below</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Your Order</h2>

        {cart.map((item) => (
          <div className="mt-4 rounded-lg border p-4" key={item.id}>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="mt-1 text-gray-600">Price: ₹{item.price}</p>

            <p className="mt-1 text-gray-600">Quantity: {item.quantity}</p>

            <p className="mt-1 font-medium">
              Subtotal: ₹{item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Shipping Information</h2>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>

            <input
              type="text"
              className="mt-2 w-full rounded-lg border px-4 py-3"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>

            <input
              type="email"
              className="mt-2 w-full rounded-lg border px-4 py-3"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Phone Number</label>

            <input
              type="tel"
              className="mt-2 w-full rounded-lg border px-4 py-3"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Address</label>

            <textarea
              className="mt-2 w-full rounded-lg border px-4 py-3"
              placeholder="Enter your address"
              rows="3"
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-medium">City</label>

            <input
              type="text"
              className="mt-2 w-full rounded-lg border px-4 py-3"
              placeholder="Enter your city"
              required
            />
          </div>

          <div>
            <label className="block font-medium">State</label>

            <input
              type="text"
              className="mt-2 w-full rounded-lg border px-4 py-3"
              placeholder="Enter your state"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Pincode</label>

            <input
              type="text"
              className="mt-2 w-full rounded-lg border px-4 py-3"
              placeholder="Enter your pincode"
              required
            />
          </div>
        </form>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Payment Method</h2>

        <div className="mt-6 space-y-3">
          <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4">
            <input type="radio" name="paymentMethod" value="upi" required/>

            <span className="font-medium">UPI</span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4">
            <input type="radio" name="paymentMethod" value="card" />

            <span className="font-medium">Card</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
