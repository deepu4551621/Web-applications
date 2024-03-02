import React from 'react'
import { MdOutlineInfo } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Routesheader from '../components/routesHeader';
import Card from '../components/card'
import Rcard from '../components/rcard'
import dummyData from '../data.json';

const Homepage = () => {

  const routes = ['Home', 'Hosting for All', 'Hosting', 'Hosting5'];
  return (
    <div className='mainContent'>
      <h1 className='heading'>Best Website builders in the US</h1>
      <hr />
      <div className='hdiv'>
        <div className='hdiv2'>
          <div className='hdiv2-div'><IoMdCloudDone size={15} color='grey' />last updated-February 22, 2020</div>
          <div className='hdiv2-div'> <MdOutlineInfo size={15} color='grey' /> Advertising Disclosure</div>
        </div>
        <div>Top Relevant <IoIosArrowDown size={15} color='grey' /></div>
      </div>
      <hr />
      <div className="list-container">
        <ul>
          <li className="list-item"><a href="#">Tools</a></li>
          <li className="list-item"><a href="#">AWS Builder</a></li>
          <li className="list-item"><a href="#">Start Build</a></li>
          <li className="list-item"><a href="#">Build Supplies</a></li>
          <li className="list-item"><a href="#">Tooling</a></li>
          <li className="list-item"><a href="#">BlueHosting</a></li>
        </ul>
      </div>
      <Routesheader routes={routes} />
      <div>
        {dummyData.map((builder, index) => (
          <Card key={index} builder={builder} />
        ))}
        <div className='rcontainer'>
          <h1>Related deals you might like for</h1>
          <div className='rbox'>
            {dummyData.map((builder, index) => (
              <Rcard key={index} builder={builder} />
            ))}
            <div className='sbox'>
              <h1>Signup and get exclusive speal deals</h1>
              <div className='form'>
                <input placeholder='email' />
                <button>Signup</button>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
      </div>
    </div>
  )
}

export default Homepage