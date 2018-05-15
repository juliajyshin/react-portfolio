import React, { Component } from 'react';


class Portfolio extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container container-main">
                    <div className="col-lg-12 text-center">
                        <h1>
                            Portfolio
                        </h1>
                        <hr></hr>
                        <p>
                            Hover over portfolio projects to see Title, Description, Technologies Used, Live Link, and Github Links.
                        </p>
                    </div>
                </div>
                {/* Portfolio Links  */}
                <div className="container">
                    <div className="col-lg-12 text-center">
                        {/* ROW START  */}
                        <div className="row">
                            {/* THIS PORTFOLIO  */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className='portfolio-box'>
                                    <img className="img-fluid" src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/portfolio.png?raw=true'} />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category">
                                                Portfolio
                                            </div>
                                            <div class="project-name">
                                                A portfolio made ground-up with pure code by Julia Shin.
                                            </div>
                                            <div class="project-name">
                                                <strong>Tech Used:</strong> React.js, SASS, Gulp, Bootstrap, CSS, Javascript, HTML, & Node.js.
                                            </div>
                                            <div class="project-links">
                                                <strong>
                                                <a class='text-white' href='https://github.com/juliajyshin/JJYS-Portfolio' target='_blank'>GitHub Repo</a>
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* INSTA DIARY  */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className='portfolio-box'>
                                    <img className="img-fluid" src={'https://juliajyshin.github.io/InstaDiary/public/assets/images/insta-diary.png'} />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category">
                                                InstaDiary
                                            </div>
                                            <div class="project-name">
                                                A travel diary to record and share travel itineraries. Please see github for instructions.
                                            </div>
                                            <div class="project-name">
                                                <strong>Tech Used:</strong> HTML, Bootstrap, CSS, jQuery, Javascript, API, Momentjs, AJAX, Firebase, & Nodejs.
                                            </div>
                                            <div class="project-links">
                                                <strong>
                                                <a class='text-white' href='https://github.com/juliajyshin/InstaDiary/' target='_blank'>GitHub</a> 
                                                |
                                                <a class='text-white' href='https://afternoon-tor-25292.herokuapp.com/' target='_blank'>Live</a>                                             
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                               {/* POKEMON HANGMAN  */}
                               <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className='portfolio-box'>
                                    <img className="img-fluid" src={'https://raw.githubusercontent.com/juliajyshin/Pokemon-Hangman/master/assets/images/hangman.png'} />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category">
                                            Pokemon Hangman
                                            </div>
                                            <div class="project-name">
                                            A simple game of hangman feature our favorite Pokemon.
                                            </div>
                                            <div class="project-name">
                                            <strong>Tech Used:</strong> HTML, CSS, Javascript.
                                            </div>
                                            <div class="project-links">
                                            <strong>
                                                <a class='text-white' href='https://github.com/juliajyshin/Pokemon-Hangman' target='_blank'>GitHub</a>
                                                |
                                                <a class='text-white' href='https://juliajyshin.github.io/Pokemon-Hangman/' target='_blank'>Live</a>
                                            </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ROW START */}
                        <div className="row">
                            {/* CRYSTAL COLLECTOR */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className='portfolio-box'>
                                    <img className="img-fluid" src={'https://raw.githubusercontent.com/juliajyshin/Crystals-Collector-Game/master/assets/images/crystals-game.png'} />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category">
                                            Crystals Collector
                                            </div>
                                            <div class="project-name">
                                            A fun and interactive number guessing game.
                                            </div>
                                            <div class="project-name">
                                            <strong>Tech Used:</strong> HTML, CSS, Javascript.
                                            </div>
                                            <div class="project-links">
                                            <strong>
                                            <a class='text-white' href='https://github.com/juliajyshin/Crystals-Collector-Game' target='_blank'>GitHub</a>
                                            |
                                            <a class='text-white' href='https://juliajyshin.github.io/Crystals-Collector-Game/' target='_blank'>Live</a>
                                            </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TRAIN SCHEDULER */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className='portfolio-box'>
                                    <img className="img-fluid" src={'https://raw.githubusercontent.com/juliajyshin/Train-Scheduler-Firebase/master/assets/img/train-schedule.png'} />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category">
                                            Train Scheduler
                                            </div>
                                            <div class="project-name">
                                            A Train Schedule Application using Firebase
                                            </div>
                                            <div class="project-name">
                                            <strong>Tech Used:</strong> HTML, CSS, Javascript, jQuery, Firebase, Momentjs.
                                            </div>
                                            <div class="project-links">
                                            <strong>
                                            <a class='text-white' href='https://github.com/juliajyshin/Train-Scheduler-Firebase' target='_blank'>GitHub</a>
                                            |
                                            <a class='text-white' href='https://juliajyshin.github.io/Train-Scheduler-Firebase/' target='_blank'>Live</a>                                          
                                            </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* FOOD GIPHY */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className='portfolio-box'>
                                    <img className="img-fluid" src={'https://raw.githubusercontent.com/juliajyshin/Food-Ajax-Giphy/master/assets/images/giphy-app.png'} />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category">
                                            Food Giphy
                                            </div>
                                            <div class="project-name">
                                            Webpage that populates favorite food gifs with AJAX calls from GIPHY
                                            </div>
                                            <div class="project-name">
                                            <strong>Tech Used:</strong> HTML, CSS, Javascript, jQuery, API, AJAX.
                                            </div>
                                            <div class="project-links">
                                            <strong>
                                            <a class='text-white' href='https://github.com/juliajyshin/Food-Ajax-Giphy' target='_blank'>GitHub</a>
                                            |
                                            <a class='text-white' href='https://juliajyshin.github.io/Food-Ajax-Giphy/' target='_blank'>Live</a>
                                            </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ROW START  */}
                        <div className="row">
                            {/* FRIENDS TRIVIA */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                 <div className='portfolio-box'>
                                    <img className="img-fluid" src={'https://raw.githubusercontent.com/juliajyshin/TriviaGame/master/assets/img/trivia.png'} />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category">
                                            F.R.I.E.N.D.S. Trivia
                                            </div>
                                            <div class="project-name">
                                            F.R.I.E.N.D.S. Trivia Game with JavaScript Timers
                                            </div>
                                            <div class="project-name">
                                            <strong>Tech Used:</strong> HTML, CSS, Javascript, jQuery.
                                            </div>
                                            <div class="project-links">
                                            <strong>
                                            <a class='text-white' href='https://github.com/juliajyshin/TriviaGame' target='_blank'>GitHub</a>
                                            |
                                            <a class='text-white' href='https://juliajyshin.github.io/TriviaGame/' target='_blank'>Live</a>
                                            </strong>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* NEW */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className='portfolio-box'>
                                <img className="img-fluid" src={'http://i68.tinypic.com/24chcmc.jpg'} />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category">
                                            Site Title
                                            </div>
                                            <div class="project-name">
                                            A short description of project.
                                            </div>
                                            <div class="project-name">
                                            <strong>Tech Used:</strong> HTML, CSS, Javascript.
                                            </div>
                                            <div class="project-links">
                                            <strong>
                                            <a class='text-white' href='/' target='_blank'>GitHub</a>
                                            |
                                            <a class='text-white' href='/' target='_blank'>Live</a>
                                            </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* NEW */}
                             <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className='portfolio-box'>
                                <img className="img-fluid" src={'http://i68.tinypic.com/24chcmc.jpg'} />
                                    <div className="portfolio-box-caption">
                                        <div className="portfolio-box-caption-content">
                                            <div className="project-category">
                                            Site Title
                                            </div>
                                            <div class="project-name">
                                            A short description of project.
                                            </div>
                                            <div class="project-name">
                                            <strong>Tech Used:</strong> HTML, CSS, Javascript.
                                            </div>
                                            <div class="project-links">
                                            <strong>
                                            <a class='text-white' href='/' target='_blank'>GitHub</a>
                                            |
                                            <a class='text-white' href='/' target='_blank'>Live</a>
                                            </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ROW END */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
