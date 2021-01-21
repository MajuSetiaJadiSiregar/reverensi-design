import React from 'react';

const Top = () => {
   return(
      <>
         <div className='top-wrapper'>
            <div className='container'>
               <h1>Belajar Coding</h1>
               <h1>Belajar Lebih Kreatif</h1>
               <p>Juara Coding adalah platform online untuk belajar pemograman</p>
               <p>Kami menawarkan lingkungan pemrograman yang lengkap untuk mempermudah Anda memulai.</p>

               <div className='btn-wrapper'>
                  <a href="#" className='btn signup'>Daftar dengan Email</a>
                  <p>Atau</p>
                  <a href="#" className='btn facebook'><span className="fa fa-facebook-square"></span>Daftar dengan Facebook</a>
                  <a href="#" className='btn twitter'><span className="fa fa-twitter-square"></span>Daftar dengan Twitter</a>
               </div>
            </div>
         </div>
      </>
   );
};
export default Top;