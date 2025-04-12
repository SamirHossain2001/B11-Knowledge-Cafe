
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-corner w-[70%] p-4">
          <Blogs></Blogs>
        </div>
        <div className="right-corner w-[30%] border p-4">
          <h1>Reading Time: 0</h1>
          <h1>Bookmark Count: 0</h1>
        </div>
      </div>
    </>
  );
}

export default App
