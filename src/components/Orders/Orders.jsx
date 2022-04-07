import React from "react";
import { Link } from "react-router-dom";
import { useOrder } from "../../contexts";
import "./Orders.css";

export const Orders = () => {
  const { orders } = useOrder();

  return (
    <>
      <h4 className="mx-1">My Orders</h4>
      <div>
        {orders.length ? (
          orders.map(
            ({
              date,
              orderId,
              paymentId,
              address,
              products,
              totalAmountWithCoupon,
            }) => (
              <div
                key={orderId}
                className="order-card border rounded-sm p-2 my-2"
              >
                <p className="text-green font-semibold">Order confirmed</p>
                <span>{date}</span>
                <p className="mb-1">
                  <span className="font-semibold text-sm mr-1">Order Id:</span>
                  {orderId}
                </p>
                <p>
                  <span className="font-semibold text-sm mr-1">
                    Payment Id:
                  </span>
                  {paymentId}
                </p>

                <p>
                  <span className="font-semibold text-sm mr-1">
                    Total amount paid:
                  </span>
                  ₹{totalAmountWithCoupon}
                </p>
                <p className="my-1">
                  <span className="font-semibold text-sm mr-1">
                    Delivery address:
                  </span>
                  {`${address.fullName}, ${address.home}, ${address.area}, ${address.pinCode}`}
                </p>

                {products.map(
                  ({ _id, alt, image, qty, price, productName }) => (
                    <Link
                      key={_id}
                      to={`/product/${_id}`}
                      title={productName}
                      className="ordered-products flex-row p-1 rounded-sm"
                    >
                      <img
                        src={image}
                        alt={alt}
                        className="rounded-sm mr-2 order-product-image"
                      />
                      <div className="flex-column content-space-between py-1">
                        <p className="text-sm font-semibold">{productName}</p>
                        <div>
                          <span className="text-sm pr-2 border-r">
                            Quantity: {qty}
                          </span>
                          <span className="text-sm pl-2">Price: ₹{price}</span>
                        </div>
                      </div>
                    </Link>
                  )
                )}
              </div>
            )
          )
        ) : (
          <p className="m-1">
            No orders yet,{" "}
            <Link to="/products" className="continue">
              continue shopping.
            </Link>
          </p>
        )}
      </div>
    </>
  );
};
