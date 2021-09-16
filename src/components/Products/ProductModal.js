import React, { Component } from "react";



class ProductModal extends Component{
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        }
    }

    modalOpen() {
        this.setState({
            modal: true
        });
    }

    modalClose() {
        this.setState({
            modal:false
        })
    }
    

    render(){

        const ModalContent = ({handleClose, show, children}) => {
            const showHideClassName = show ? "modal d-block" : "modal d-none";
        
            return (
              <>
                <button onClick={e=>this.modalOpen(e)} type="button" className="btn btn-primary" style={{width:"100%"}}>View details</button>
                  <div className={showHideClassName}>
                   {/* Modal content follows... */}
                        <div show={this.state.modal} className="modal-container " tabIndex="-1">
                                <div className="modal-header" >
                                    <h5 className="modal-title">Product Overview</h5>
                                </div>
                                <div className="modal-body">
                                    {children}
                                </div>
                                <div className="modal-footer">
                                    {/* Event handler for btn needed*/ }
                                    <button type="button" className="btn btn-secondary" onClick={e => this.modalClose(e)} >Close</button>
                                </div>
                        </div>
                    </div>
                </>
            );
        }
        
        return(
            <div>
                {ModalContent}
            </div>
        )    



    }
}

export default ProductModal;