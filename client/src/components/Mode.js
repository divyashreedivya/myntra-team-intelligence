import React from 'react'
import Game from './Game'

export default function Mode() {
    return (
      <>
      
            <button  type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    
                       <div className="modal-body">
                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <Game/>
                        </div>
                        
                    
                </div>
            </div>
      </>
    )
}

