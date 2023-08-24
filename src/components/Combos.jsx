import React from 'react'

const Combos = ({combo}) => {
  console.log(combo)
  
  return (
    <div className='combos'>
      <div className='combo__container'>
      <img className='img-src-combo' src={combo.item1} alt="" /> 
    
      </div>
      <span className='plus'>+</span>
      <div className='combo__container'>
      <img className='img-src-combo' src={combo.item2} alt="" /> 

      </div>          
      <span className='plus'>+</span>
      <div className='combo__container'>
      <img className='img-src-combo' src={combo.item3} alt="" /> 
  
      </div>
      <span className='plus'>=</span>
      <h4 className='combo__price'>$ {combo.price}</h4>

    </div>
  )
}

export default Combos