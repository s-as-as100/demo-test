import React, { Children } from 'react'
import  '../Styles/Layout.scss';

const Layout = ({children}) => {
   return (
    <div className='layout'>{children}</div>
  )
}

export default Layout;