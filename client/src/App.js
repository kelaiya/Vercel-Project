import './App.css';
import {Link} from 'react-router-dom';
import Footbar from './Footbar'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <div>
      <div className="content">
        <Navbar />
        <div>
          <img className="image" src="/IMG_2094.jpg" />
        </div>
         <h2 className="text slogan"> My Everyday Reminder </h2>
        <p className="text"> The best preparation for tomorrow is doing your best today. </p>
        <h2 className="text slogan"> About me... </h2>
        <p className="text"> Hey! I’m an Electronics and Communication Engineer and a former teacher based in NYC who made a big career shift into software development. I started out by teaching myself Java and even earned a couple of Oracle Java certifications along the way. </p>
        <p className="text"> In 2017, I took a leap and joined the Grace Hopper Program at Fullstack Academy — a coding bootcamp for women — and it was a game changer. I got hands-on with modern web development tools like JavaScript, Node.js, React, and Redux, and quickly realized I’d found the right path. </p>
        <p className="text"> Over time, I took on more complex projects, mentored newer devs, and was eventually promoted to Senior Developer. I’ve always enjoyed being part of teams where I can both lead and keep learning — especially when it comes to solving real-world problems through clean, efficient code. </p>
        <p className="text"> I love how coding turns ideas into real, working products — and how there’s always a new challenge to take on. I’m currently looking ahead to new opportunities where I can continue building great software, growing with a team, and making an impact. </p>
        <p className='text'>Outside of tech, I love singing and traveling — I've visited 16 countries so far, and I’m always planning my next adventure.</p>
        <Footbar />
       </div>    
    </div>
    </div>
  );
}

export default App;
