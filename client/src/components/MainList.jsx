import React from 'react'
import styled from 'styled-components'
import MainCard from './MainCard'

export default function MainList() {
    const CardContainer=styled.div`
        justify-content: center;
    `

const data=[
  {
      color: "red",
      value: "#f00"
  },
  {
      color: "green",
      value: "#0f0"
  },
  {
      color: "blue",
      value: "#00f"
  },
  {
      color: "cyan",
      value: "#0ff"
  },
  {
      color: "magenta",
      value: "#f0f"
  },
  {
      color: "yellow",
      value: "#ff0"
  },
  {
      color: "black",
      value: "#000"
  },
  {
      color: "red",
      value: "#f00"
  },
  {
      color: "green",
      value: "#0f0"
  },
  {
      color: "blue",
      value: "#00f"
  },
  {
      color: "cyan",
      value: "#0ff"
  },
  {
      color: "magenta",
      value: "#f0f"
  },
  {
      color: "yellow",
      value: "#ff0"
  },
  {
      color: "black",
      value: "#000"
  }
];
  return (

   <CardContainer className='container'>
{data.map((data,index)=>(
  <MainCard key={index}/>
))}






   </CardContainer>
  )
}
