import React from 'react'
import  '../Styles/Header.scss';
import logo from  '../assets/logo.png'
import Layout from './Layout';
const Header = () => {
  return (
   <Layout>
     <div className='headerContainer'>
        <div className='projectIcon'>
            <img src={logo}/>
         </div>
         <div>
            <ul className='headerLegends'>
              <li>Products</li>
              <li>Invest</li>
              <li>Community</li>
              <li>About</li>
            </ul>
         </div>
         <div className='buttonLegend'>
               <button className='buttonAccess'>Early Access</button>
         </div>
         
    </div>
   </Layout>
  )
}

export default Header