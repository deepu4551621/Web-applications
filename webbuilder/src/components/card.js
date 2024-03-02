
import React, {useState} from 'react';
import '../styles/card.scss';
import { BsImageFill } from "react-icons/bs";
import { CiTrophy } from "react-icons/ci";
import StarRating from './star';
const Card = ({ builder }) => {
    const { id, name, description, rating, features } = builder;
    const [expanded, setExpanded] = useState(false);

    const toggleDescription = () => {
      setExpanded(!expanded);
    };
    const getGrade = (rating) => {
      if (rating >= 8.5) {
        return "Excellent";
      } else if (rating >= 7.5) {
        return "Good";
      } else {
        return "Average";
      }
    };
    return (
        <div className="card">
            <span className='c1'>
                <span><CiTrophy size={25} color='white' /></span>
                <span>Best Choice</span>
            </span>
            <span className='c2'>{id}</span>
            <div className='image'>
                <BsImageFill size={120} color='grey' />
                <div className='bname'>{name}</div>
            </div>
            <div className='c3'>  
            <h2>{name}</h2>
      <p>Features</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p className='desc'>{expanded ? description : `${description.slice(0, 30)}...`}
      {!expanded && <button style={{border:'none', color:'blue'}} onClick={toggleDescription}>Show More</button>}
      </p>
      </div>
            <div className='c4'>
                <div className='rating' > 
                <h1>{rating}</h1>
                <h2>{getGrade(rating)}</h2>
                <div>
                  <StarRating rating={rating}/>
                </div>
                </div>
                <button className='viewbtn'>View</button>
            </div>
        </div>
    );
};

export default Card;
