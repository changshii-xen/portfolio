import React, {Fragment} from 'react';
import BarChart from '../pages/chart/Chart';
import 'materialize-css/dist/css/materialize.min.css';
import Logger from '../layout/modals/IT-Logger';
import Finder from '../layout/modals/Github-Finder'
import Keeper from '../layout/modals/ContactKeep'


const skills = () => {
    return (
        <div className="container5">
            <div>
            <div className="headers">
                <p style= {{ color : '#f9e6f0'}}>
                <h1>
                    <i>Skills / Work</i> 
                </h1>
                </p>
            </div>
            <div className="row">
                <div className="skill">
                <p style= {{ color : '#f9e6f0'}}>
                <h4>
                    Languages / Frameworks <br/>
                    <h5>
                        These are the Languages and Frameworks that I have worked with.
                    </h5> 
                </h4>
                <div className="row">
                    <div className="icon">
                    <img src="https://img.icons8.com/color/48/000000/python.png" alt="python"/>
                        <p style= {{ color : '#f9e6f0'}}>
                        <h6>
                        <i>PYTHON</i> 
                        </h6>
                        </p>
                    </div>
                    <div className="icon2">
                    <img src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png" alt="mySQL"/>
                        <p style= {{ color : '#f9e6f0'}}>
                        <h6>
                        <i>mySQL</i> 
                        </h6>
                        </p>
                    </div>
                    <div className="icon3">
                    <img src="https://img.icons8.com/color/64/000000/javascript.png" alt="js"/>
                        <p style= {{ color : '#f9e6f0'}}>
                        <h6>
                        <i>JAVASCRIPT</i> 
                        </h6>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon4">
                    <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS"/>
                        <p style= {{ color : '#f9e6f0'}}>
                        <h6>
                        <i>CSS</i> 
                        </h6>
                        </p>
                    </div>
                    <div className="icon5">
                    <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="html"/>
                        <p style= {{ color : '#f9e6f0'}}>
                        <h6>
                        <i>HTML</i> 
                        </h6>
                        </p>
                    </div>
                    <div className="icon6">
                    <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react"/>
                        <p style= {{ color : '#f9e6f0'}}>
                        <h6>
                        <i>REACT</i> 
                        </h6>
                        </p>
                    </div> 
                    <div className="icon7">
                    <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap"/>
                        <p style= {{ color : '#f9e6f0'}}>
                        <h6>
                        <i>BOOTSTRAP</i> 
                        </h6>
                        </p>
                    </div>
                </div>
                </p>
                </div>
                <div className="skill3">
                <p style= {{ color : '#f9e6f0'}}>
                <h4>
                    My Accounts/ My Work 
                </h4>
                </p>
                    <p style= {{ color : '#f9e6f0'}}>
                    <h5>
                    Link to my Accounts.
                    </h5>
                    </p>
                        <div className="row">
                            <div className="account">
                            <img src="https://img.icons8.com/fluent/50/000000/github.png" alt="github"/>
                            </div>
                            <div className="account2">
                            <img src="https://img.icons8.com/ios-filled/50/000000/codepen.png" alt="CodePen"/>
                            </div>
                            <div className="account3">
                            <img src="https://img.icons8.com/color/50/000000/linkedin.png" alt="LinkedIn"/>
                            </div>
                        </div>
                        <div className="project4">
                        <p style= {{ color : '#f9e6f0'}}>
                        <h5>
                        Check out some of my Work below
                        </h5>
                        </p>
                        <div className="row">
                            <div className="project1">
                            <Fragment>
                                <Logger />
                            </Fragment>
                            </div>
                            <div className="project2">
                            <Fragment>
                                <Finder />
                            </Fragment>
                            </div>
                            <div className="project3">
                            <Fragment>
                                <Keeper />
                            </Fragment>
                            </div>
                        </div>
                        </div>
                </div>
                </div>
                <div className="row">
                <div className="skill2">
                <p style= {{ color : '#f9e6f0'}}>
                <h4>
                    Rating Chart
                    <h5>
                        This is how I would rate my skills
                    </h5> 
                </h4>
                </p>
                <Fragment>
                    <BarChart />
                </Fragment>
                </div>
            </div>
            </div>
        </div>
    )
}


export default skills;