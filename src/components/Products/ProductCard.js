import React, {useEffect, useState} from "react";
import axios from "axios";
import { Modal } from "./ProductModal";

const ProductCard = () => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);




    useEffect(() => {
        getProducts();
    }, [])


    const getProducts = () => {
       axios.get('https://api.jsonbin.io/b/61420629aa02be1d4448c519')
       .then((res) => res.data)
       .then((productApi) => setProducts(productApi))
       .then(setLoading(true))
       .catch((err) => {
           alert(err.message)
       })
    }

    // TODO clean up and complete this component

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return(
        <>
            {loading && products.map((product) => (
                <div className="container col d-flex align-self" key={product.id}>
                <div className="card mb-4"  style={{ width: '18rem' }}>
                <img src={product.image} alt={product.name} width='100%'/>
                <hr/>
                <div className="card-body">
                <h5 className="card-title">{product.name}
                </h5> 
                <p className="card-text">
                    {product.measure}<br/>
                    <br/>
                    <span className="card-text text-muted fs-6">Product Code: {product.sku} </span>
                </p> 
                <hr/> 
                <button id={product.id} onClick={openModal} type="button" className="btn btn-primary" style={{width:"100%"}}>View details</button>
              
                <Modal showModal={showModal} setShowModal={setShowModal}/>
                
            </div>
            </div>
            </div>
            
            ))}






        </>
    )




}

export default ProductCard;

