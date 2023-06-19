import React from 'react'
import styled from 'styled-components'

export default function MainCard() {
    const Card=styled.div`
        width:400px;
        border-bottom: 1px solid #949393 ;
    `
  return (
    <Card className="card mx-auto my-3" >
        
  <img src="https://gratisography.com/wp-content/uploads/2023/02/gratisography-colorful-kittenfree-stock-photo-800x525.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

    </Card>
  )
}
