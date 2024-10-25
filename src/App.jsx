
import './App.css'
import Header from './components/header/header'
import Blogs from './components/blogs/Blogs';

import { data } from 'autoprefixer';
import Bookmarks from './components/bookmarks/Bookmarks';

function App() {
 

  return (
    <>
      <Header></Header>
      <main className='md:flex w-11/12 mx-auto mt-6'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </main>
      
      
    </>
  )
}

export default App
