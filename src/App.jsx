
import './App.css'
import Header from './components/header/header'
import Blogs from './components/blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
 const [bookmarks, setBookmarks] = useState([]);
 const [readingTime, setReadingTime] = useState(0);

 const handleAddToBookMark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
 }

 const handleMarkAsRead = time => {
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
 }

  return (
    <>
      <Header></Header>
      <main className='md:flex w-11/12 mx-auto mt-6'>
      <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
      
      
    </>
  )
}

export default App
