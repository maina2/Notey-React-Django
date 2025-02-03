import React, { ReactElement } from 'react'


type Headingprops ={
    title:string
}
const Heading = ({title}:Headingprops): ReactElement=> {
  return (
    <div>{title}</div>
  )
}

export default Heading