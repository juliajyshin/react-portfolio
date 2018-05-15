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
                                <h3>This online portfolio showcases the creative works and interests curated by Julia JY Shin. Highly-motivated Full Stack Developer with a passion for problem-solving and analytical work. Versatile web developer who has a penchant for the visual arts, I am proficient with HTML, JavaScript, CSS, and design principles and seek to apply them in designing aesthetic, computer applications that unite function with form. Branching off on my own, I also perform freelance work for Social Media Marketing, Networking, and Influencing. Eclectic and equipped with a wide breath of knowledge to provide a well-rounded perspective catered to any client or project. I am experienced with a demonstrated history of working in multiple industries.
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
