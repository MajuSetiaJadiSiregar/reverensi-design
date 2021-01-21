import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Lesson from './components/Lesson';
import Message from './components/Message';
import Top from './components/Top';

const App = () => {
   return(
      <>
         <Header/>
         <Top/>
         <Lesson/>
         <Message/>
         <Footer/>
      </>
   )
};
export default App;