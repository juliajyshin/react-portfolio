import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container container-main">
                    {/* About Me Section */}
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-8 about-me">
                                <br></br>
                                <h1>about me </h1>
                                <br></br>
                                <h3>Who am I? My name is Julia JY Shin, I like to eat my food so spicy that it’s pure torture to others, and I am much shorter in real life compared to my pictures. This here is my online portfolio that showcases the creative works and interests curated by none other than, yours truly. If you look at my history, you’re probably thinking, “How did this flashy fashionista turn into a coding guppy?”. To answer your question, my love for code started when I was 14, in a new state with no friends other than my computer and AOL dialup. The young Julia was completely obsessed with the internet game of virtual animals called “Neopets” and wanted to build a Neopet guild that was out of this world. This lead to making a Geocities website to show my friends back at home what I was up to, to custom Xanga layouts, Myspace edits, and even currently editing my own Wordpress site as a freelance blogger.<br></br><br></br>I am a versatile web developer with a penchant for the visual arts. With my design principles derived from my previous experiences I seek to apply them to aesthetic computer applications that unite function with form. I am a intuitive leader as well as a strong team player demonstrating unique talents. With my in-depth analytical and problem solving ability combined with a proactive and robust work ethic, I am equipped to provide a well-rounded perspective catered to any client or project.
                                </h3>
                            </div>
                            <div className="col-lg-4 profile-image">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/profile.jpg?raw=true'} />
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    {/* Skills Lists */}
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <h4>Full Stack Web Dev Skills</h4>
                                <br></br>
                                <ul class="about">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Javascript</li>
                                    <li>jQuery</li>
                                    <li>mongoDB</li>
                                    <li>React.js</li>
                                    <li>Bootstrap</li>
                                    <li>NodeJS</li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4>Application Skills</h4>
                                <br></br>
                                <ul class="about">
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Adobe Premier Pro</li>
                                    <li>Microsoft Office: (Word, Excel, Powerpoint)</li>
                                    <li>Quickbooks Accounting Software</li>
                                    <li>Xero Accounting Software</li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h4>Other Intriguing Skills</h4>
                                <br></br>
                                <ul class="about">
                                    <li>Freelance Creative Marketing</li>
                                    <li>Instagram Influencer</li>
                                    <li>Fashion Enthusiast</li>
                                    <li>Yelp Elite Food Critic</li>
                                    <li>Lifestyle Blogger</li>
                                    <li>OCD Organizer</li>
                                    <li>Animal Lover</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    {/* Education Icons */}
                    <div class="container" id="edu-section">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <h1>Education</h1>
                                <hr class="edu-hr"></hr>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-12 text-center">
                                <h3>
                                    UCI Coding Bootcamp
                                </h3>
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/educoding.JPG?raw=true'} class='edu-icon one' />

                                <p>
                                    Web Developer
                                </p>
                                <p>
                                    2018
                            </p>
                            </div>
                            <div class="col-lg-4 col-12 text-center">
                                <h3>
                                    Fashion Institute of Design & Merchandising
                        </h3>
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/edufashion.JPG?raw=true'} class='edu-icon two' />
                                <p>
                                    Fashion Designer
                        </p>
                                <p>
                                    2011
                        </p>
                            </div>
                            <div class="col-lg-4 col-12 text-center">
                                <h3>
                                    JFK High School
                        </h3>
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/edustudent.JPG?raw=true'} class='edu-icon three' />
                                <p>
                                    Ecstatic Teenager
                        </p>
                                <p>
                                    2008
                        </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default About;
