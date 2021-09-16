import { Component } from "react";
import ProductCard from "./Products/ProductCard";

export default class StockRoom extends Component {
    render() {
        return(
            <>
                <div className="container mt-4">
                    <h3 className="mb-4">
                        Stock Room
                    </h3>
                    <div className="row">
                        <ProductCard/>
                    </div>
                </div>
            </>
        )
    }
}