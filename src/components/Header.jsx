import React from 'react';

const Header = () => {
   return(
      <>
         <header>
            <div className='container'>
               <div className='header-left'>
                  <img className='logo' src="https://prog-8.com/images/html/advanced/main_logo.png" alt=""/>
               </div>
               <div className='header-right'>
                  <a href="#" className='login'>Login</a>
               </div>
            </div>
         </header>
      </>
   );
};
export default Header;