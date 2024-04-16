import { useState } from 'react';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from 'react-icons/fa';

import people from './data';

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = people[index];

  const nextPerson = () => {
    if (index < people.length - 1) {
      setIndex((currentIndex) => currentIndex + 1);
    }
  };
  const prevPerson = () => {
    if (index > 0) {
      setIndex((currentIndex) => currentIndex - 1);
    }
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>

        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
      </article>
    </main>
  );
};
export default App;
