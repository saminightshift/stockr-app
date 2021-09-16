import React, { Component } from 'react';
import ProductModal from './ProductModal';

class DetailBtn extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({show:true});
    };

    hideModal = () => {
        this.setState({show:false})
    }

    render() {
        return (
            <div >
                <ProductModal show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal goes here</p>
                </ProductModal>
            <button onClick={this.showModal} type="button" className="btn btn-primary" style={{width:"100%"}}>View details</button>

             {/* Product information modal only visible in Inventory mode */}


            </div>

        )
    }
}

export default DetailBtn;