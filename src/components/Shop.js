import { Component } from "react";
import ProductCard from "./Products/ProductCard";

export default class Shop extends Component {

    render() {
        return(
            <>
                <div className="container mt-4">
                    <h3 className="mb-4">
                        Shop Floor
                    </h3>

        {/* 
            TODO:
            Variation of product card component will go here
            Add to cart functionality
        */}
                    <div className="row">
                        <div className="col">

                        <h5>Product grid</h5>

                        </div>
                        <div className="col">
                           <div className="card text-dark bg-light mb-3">
                               <div className="card-header">
                                    <h5 className="card-title">Cart</h5>
                               </div>
                               <div className="card-body">
                                    Regent Leather - 50ml
                                    <br/><br/>
                                    £195.00
                               </div>
                               <div className="card-footer">
                                    <h5 className="card-title">Total: £195.00</h5>
                               </div>
                           </div>
                           <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-primary">Checkout Cash</button>
                                &nbsp;
                                <button type="button" className="btn btn-dark">Checkout Card</button>

                           </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}