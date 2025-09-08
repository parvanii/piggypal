import React from 'react'
import {checkUser} from '@/lib/checkUser';

const Navbar = async () => {
    const user=  await checkUser()
  return (
   
    <div>Navbar</div>
  )
}

export default Navbar;