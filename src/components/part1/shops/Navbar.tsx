import React from 'react'

interface NavbarProps {
  cartNum: number
}

const Navbar = ({ cartNum }: NavbarProps) => {
  return <div>{cartNum}</div>
}

export default Navbar
