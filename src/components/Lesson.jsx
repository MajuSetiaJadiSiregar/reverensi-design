import React from 'react';

const Lesson = () => {
   return(
      <>
         <div className='lesson-wrapper'>
            <div className='container'>
               <div className='heading'>
                  <h2>Cari tau dari mana anda memulai !!!</h2>
               </div>
               <div className='lessons'>
                  <div className='lesson'>
                     <div className='lesson-icon'>
                        <img src="https://prog-8.com/images/html/advanced/html.png" alt=""/>
                        <p>HTML & CSS</p>
                     </div>
                     <p className="txt-contents">Bahasa yang digunakan untuk membuat dan mendesain tampilan situs web Anda. </p>
                  </div>
                  
                  <div className='lesson'>
                     <div className='lesson-icon'>
                        <img src="https://prog-8.com/images/html/advanced/jQuery.png" alt=""/>
                        <p>jQuery</p>
                     </div>
                     <p class="txt-contents">Library JavaScript yang cepat, kaya akan fitur, dan mudah digunakan yang menangani animasi dan permintaan Ajax.</p>
                  </div>

                  <div className='lesson'>
                     <div className='lesson-icon'>
                        <img src="https://prog-8.com/images/html/advanced/ruby.png" alt=""/>
                        <p>Ruby</p>
                     </div>
                     <p class="txt-contents">Bahasa dinamis, serba guna yang sederhana dan produktif. Ruby sering digunakan untuk membuat aplikasi web yang responsive.</p>
                  </div>
                  
                  <div className='lesson'>
                     <div className='lesson-icon'>
                        <img src="https://prog-8.com/images/html/advanced/php.png" alt=""/>
                        <p>PHP</p>
                     </div>
                     <p class="txt-contents">Bahasa skrip open source yang dapat disematkan ke dalam HTML, dan cocok untuk pengembangan web.</p>
                  </div>
                  
               </div>
            </div>
         </div>
      </>
   );
};
export default Lesson;