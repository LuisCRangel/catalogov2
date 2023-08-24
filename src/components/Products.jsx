import React from 'react'

const Products = ({catalogue}) => {
  return (
    <div className="cards">
              <div className="contenedor-ordenes-avatar">
                <span>Id: #{catalogue.id}</span>
                <img className="avatar-cards" src={catalogue.avatar} alt="" />
              </div>
              <hr />
              <div className="contenedor-img-src">
                <img className="img-src" src={catalogue.src} alt="" />               
                  <h3 className='name__service'>{catalogue.name}</h3>         
              </div>              
              <div className="contenedor-icons">
                <span>$ {catalogue.price}</span>

                <div>
                  <button>
                    <i className="bx bx-cart bx-tada"></i>
                  </button>
                </div>
              </div>
            </div>
  )
}

export default Products