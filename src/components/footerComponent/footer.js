import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer>
                <h3 class="text-center">Let's connect.</h3>
                <hr class="connect"></hr>

                <div class="col-lg-8 offset-lg-2 text-center">
                    <div class="row">
                        <div class="col-lg-4 col-12 text-center">
                            <a href="https://github.com/juliajyshin" target="_blank">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/GITHUB_WHITE_LOGO.png?raw=true'} />
                            </a>
                            <p>
                                <a href="https://github.com/juliajyshin" target="_blank">Github</a>
                            </p>
                        </div>
                        <div class="col-lg-4 col-12 text-center">
                            <a href="mailto:juliajyshin@gmail.com" target="_blank">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/EMAIL_LOGO.png?raw=true'} />
                            </a>
                            <p>
                                <a href="mailto:juliajyshin@gmail.com">juliajyshin@gmail.com</a>
                            </p>
                        </div>
                        <div class="col-lg-4 col-12 text-center">
                            <a href="https://www.linkedin.com/in/juliajyshin/" target="_blank">
                                <img src={'https://github.com/juliajyshin/images/blob/master/react-portfolio/LINKEDIN_LOGO.png?raw=true'} />
                            </a>
                            <p>
                                <a href="https://www.linkedin.com/in/juliajyshin/" target="_blank">LinkedIn</a>
                            </p>
                        </div>
                    </div>
                </div>
                <p class="text-center copyright">&copy; Copyright 2017 Julia Shin</p>
            </footer>
        );
    }
}

export default Footer;
