import React from 'react'
import { Link} from 'react-router-dom'

const Dashboard = () => {
return(
    <div>
      <nav className='bg'>
         <ul className='d-flex'>
            <li>
              <Link to="/" className='color-white text-decoration-none'>Form</Link>
            </li>
            <li>
              <Link to="/Form-useContext" className='color-white text-decoration-none'>Form-useContext</Link>
            </li>
            <li>
              <Link to="/DisplayForm-useContext" className='color-white text-decoration-none'>DisplayForm-useContext</Link>
            </li>
            <li>
              <Link to="/about" className='color-white text-decoration-none'>About</Link>
            </li>
            <li>
              <Link to ="/main" className='color-white text-decoration-none'>Main</Link>
            </li>
            <li>
              <Link to ="/anyFile" className='color-white text-decoration-none'>AnyFile</Link>
            </li>
          </ul>
        </nav>
        <h1 className='text-center'>dashbord</h1>
    </div>
)
}

export default Dashboard
