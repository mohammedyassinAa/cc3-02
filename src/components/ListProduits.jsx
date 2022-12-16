import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ListProduits = () => {
const { id } = useParams();
const data = useSelector((state) => state.cart.data);
const items = data.carts.filter((product) => {
    return product.userId === id;
});
console.log(items);
let totalPrice = 0;
items.map((item) =>
    totalPrice = item.total
);
let quantityTotal = 0;
items.map((item) =>
quantityTotal = item.totalQuantity
);
let totalProducts = 0;
items.map((item) =>
totalProducts = item.totalProducts
);

return (
    <div className="products">
        <h1>ListProduits</h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Discount Percentage</th>
                    <th>Discounted Price</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
        
        {items.map((item) =>
            item.products.map((a) => {
                return (<tbody key={a.id}>
                    <tr >
                    <td>{a.title}</td>
                    <td>{a.discountPercentage}</td>
                    <td>{a.discountedPrice}</td>
                    <td>{a.price}</td>
                    <td>{a.quantity}</td>
                    <td>{a.total}</td>
                    </tr></tbody>
                );
                })
            )}
            
            <tfoot>
                <tr>
                    <th> Total Price : {totalPrice} </th>
                    <th> Quantity Total : {quantityTotal} </th>
                    <th colSpan='5'> Total  Products : {totalProducts} </th>
                </tr>
            </tfoot>
        </table>
    </div>
);
};

export default ListProduits;