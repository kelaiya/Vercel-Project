import React, { Component } from 'react';
import Navbar from './Navbar'
import Footbar from './Footbar'
import ReactPlayer from 'react-player';
import YouTube from "react-youtube";

export default class Projects extends Component{
    render(){
        const options = {
            height: '390',
            width: '640',
            playerVars: {
            autoplay: 1,
            controls: 1,
            },
        };
    	var frontend = ["React", "Redux", "Javascript", "Phoenix LiveView", "Elm", "React-Native", "jQuery", "AJAX", "HTML5", "CSS3", "Flexbox"];
    	var backend = ["Node.js", "LiveView", "Elixir", "Phoenix", "Ecto", "Python", "Sequelize", "SQL", "Express.js", "Java", "Ruby"];
    	var other = ["Redis", "Auth0", "Mocha", "Chai", "Git", "Webpack", "Postman", "Command Line", "Xcode"];
	   <iframe width="800" height="800" src="https://www.youtube.com/embed/iZTnL2dbpvU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	    return (
	        <div>
                <Navbar />
		    	<div className="content">
		    		<h2 className="subtitle"> Skills </h2> 
                    <div className="skills">
                        <div>
                            <h3> Front-End </h3>
                            <ul>
                            {
                                frontend.map(function(x, i){
                                    return <p key={i}>{x}</p>
                                })
                            }
                            </ul>
                        </div>
                        <div>
                            <h3> Back-End </h3>
                            <ul>
                            {
                                backend.map(function(x, i){
                                    return <p key={i}>{x}</p>
                                })
                            }
                            </ul>
                        </div>
                        <div>
                            <h3> Others </h3>
                            <ul>
                            {
                                other.map(function(x, i){
                                    return <p key={i}>{x}</p>
                                })
                            }
                            </ul>
                        </div>
                    </div>
                    <h2 className='subtitle'> Projects </h2>
                    <div>
                        <h2 className='text'> SimpleQL </h2>
                        <div className='code'>
                            <a href="https://github.com/kelaiya/ER2SQL" className="under"><button className="button2" type="submit"> GitHub </button></a>
                        </div>
                        <p className='text'>
                            <b> Description: </b>
                            A web app which creates and stores databases on AWS RDS, visualizes it with schemas and gives SQL scripts downloadable to user’s local machine. It also takes data from users using CSV files and gives API endpoints to all the account holders. 
                        </p>
                        <p className='text'>
                            <b>Technologies used:</b>
                            Javascript, React-Redux, Node.js, AWS-RDS, Express, Sequelize 
                        </p>
                        <div className='pic1'>
                            <img src="/first.png" className='sample1' />
                            <img src="/third.png" className='sample1' />
                        </div>
                        <p className='videoTitle'> Check out the video </p>
                        <div className='video-wrapper'>
                            <YouTube videoId="0BrDHeQ5hxw" options={options} onReady={this._onReady} id="video"/>
                        </div>
                    </div>
                    <hr className="divider" />
                    <div>
                        <h2 className="text"> Skye </h2>
                        <div className="code">
                            <a href="https://github.com/kelaiya/MyProject" className="under"><button className="button2" type="submit"> GitHub </button></a>
                        </div>
                        <p className="text"><b> Description: </b>A mobile app that tracks your location, obtains accurate weather information, and then suggests    things to do based on the forecast. </p>
                                <p className="text"><b> Technologies used: </b>React-Native, Stack Navigation, CSS </p>
                        <div className="pic2">
                                    <img src="/1.png" className="sample2" />
                                    <img src="/2.png" className="sample2" />
                                    <img src="/3.png" className="sample2" />
                        </div>
                        <p className="videoTitle"> Check out the video </p>
                        <div className="video-wrapper">
                            <div className="video">
                                <YouTube videoId="iZTnL2dbpvU" options={options} onReady={this._onReady} id="video"/>
                            </div>
                        </div>
                    </div>
	      	    </div>
                <Footbar />
	        </div>
	    )
	}
}