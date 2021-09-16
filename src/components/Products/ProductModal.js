import React from "react";


export const Modal = ({showModal, setShowModal, children}) => {

    // TODO clean up and complete this component

    return (
        <>

           {showModal ? (
           
           <div className="modal-container">
               <div className="modal-header">
                   Product Overview
               </div>
               <div className="modal-body">
                {children}
               </div>
               <div className="modal-footer">
               <button type="button" className="btn btn-secondary" onClick={() => setShowModal(prev => !prev)} >Close</button>
               </div>
           </div>
           
           ) : null}
        </>
    )
}