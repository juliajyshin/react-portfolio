import React, { Component } from 'react';


class Homepage extends Component {
    render() {
        return (
            <div className="container-fluid">
                {/* Main Photo Banner  */}
                <div className="headerarea" id="header-matrix">
                </div>
                {/* Technology Icons */}
                <div className="container container-main">
                    <div className="col-lg-12 text-center">
                        <h1>
                            Technologies
                        </h1>
                        <hr></hr>
                    </div>
                    <div className="container">
                        <div className="row tech-row">
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/HTML5_LOGO.png?raw=true'} />
                                <p>
                                    HTML 5
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/CSS3_LOGO.png?raw=true'} />
                                <p>
                                    CSS 3
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/JAVASCRIPT_LOGO.png?raw=true'} />
                                <p>
                                    Javascript
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/JQUERY_LOGO.png?raw=true'} />
                                <p>
                                    jQuery
                            </p>
                            </div>
                        </div>
                        <div className="row tech-row">
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/MONGODB_LOGO.png?raw=true'} />
                                <p>
                                    mongoDB
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/REACT.png?raw=true'} />
                                <p>
                                    ReactJS
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/BOOTSTRAP_LOGO.png?raw=true'} />
                                <p>
                                    Bootstrap
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/NODE_LOGO.png?raw=true'} />
                                <p>
                                    NodeJS
                            </p>
                            </div>
                        </div>
                        <div className="row tech-row">
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/EXPRESS_LOGO.png?raw=true'} />
                                <p>
                                    Express
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/MYSQL_LOGO.png?raw=true'} />
                                <p>
                                    MySQL
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="col-lg-12 text-center">
                        <h1>
                            Developer Tools
                        </h1>
                        <hr></hr>
                    </div>
                    <div className="container">
                        <div class="row tech-row">
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/PHOTOSHOP_LOGO.png?raw=true'} />
                                <p>
                                    Photoshop
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/ILLUSTRATOR_LOGO.png?raw=true'} />
                                <p>
                                    Illustrator
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/GITHUB_BLACK_LOGO.png?raw=true'} />
                                <p>
                                    Github
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/POSTMAN_LOGO.png?raw=true'} />
                                <p>
                                    Postman
                            </p>
                            </div>
                        </div>
                        <div className="row tech-row">
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/HEROKU_LOGO.png?raw=true'} />
                                <p>
                                    Heroku
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/VISUALSTUDIO_LOGO.png?raw=true'} />
                                <p>
                                    Visual Studio
                            </p>
                            </div>
                            <div className="col-lg-3 col-12 text-center">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/SLACK_LOGO.png?raw=true'} />
                                <p>
                                    Slack
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
