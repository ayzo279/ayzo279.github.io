import * as React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Case from './Case.js';
// import { Tabs, Tab } from '@mui/material';
import Image from "react-bootstrap/Image";

import amplifi from '../assets/img/amplifi.png';
import proto from '../assets/img/proto.png';
import proto2 from '../assets/img/USAIDproto.png'
import cidi from '../assets/img/CIDI.png';
import autodiff from '../assets/img/autodiff.png';
import crim from '../assets/img/crimsonconnect.png';
import echo from '../assets/img/echo.png';
import deluge from '../assets/img/deluge.png';
import music from '../assets/img/music.png';
import starcolor from '../assets/img/starcolor.png';
import lowell from '../assets/img/lowell.png';
import mslogo from '../assets/img/mslogo.png';

export const Projects = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Container className="projects" id="projects">
            <h2>PROJECTS</h2>
            <h3>UX/UI Design</h3>
            <Row className="project-card1 gx-0">
                <Col sm={4} className="amplifi-banner">
                    <Image src={amplifi} style={{width:"80%"}}/>
                </Col>
                <Col sm={8}>
                    <Row>
                    <Image src={proto}/>
                    </Row>
                    <Row>
                        <Col xs = {12} sm={12} m={12} l ={8} xl={8} className="project-desc">
                        <h4>amplifi</h4>
                        <p>
                        A mobile application to provide households a way of monitoring and reducing their energy bills
                        </p>
                        </Col>
                        <Col xs={3} sm={2} m={2} l={1} xl={1} className="proj-links">
                            <Col className="proj-links">
                                <Row>
                                <a href="https://docs.google.com/document/d/1MGwjNRlvU6susEn1gPJ-SQPASgiAkyya94xq4B2zSnk/edit?usp=sharing" style={{textDecoration:'none', color:'inherit'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" style={{minWidth:"25px" ,borderStyle:"solid", padding:"5px", marginBottom:"2px", borderRadius:"0.5em", borderWidth:"0.2em"}} viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                                </svg>
                                <span>Details</span>
                                </a>
                                </Row>
                            </Col>
                            <Col className="proj-links">
                                <Row>
                                <a href="https://www.figma.com/file/0Mn3bVZZvaF31vEYpNHtqu/P3-Final-Prototype?node-id=0%3A1&t=sFWkMJhuDR5hhkVv-1" style={{textDecoration:'none', color:'inherit'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" style={{minWidth:"25px", borderStyle:"solid", padding:"5px", marginBottom:"2px", borderRadius:"0.5em", borderWidth:"0.2em"}} viewBox="0 0 16 16">
                                <path d="M5 1v8H1V1h4zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm13 2v5H9V2h5zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9zM5 13v2H3v-2h2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3zm12-1v2H9v-2h6zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9z"/>
                                </svg>
                                <span>Prototypes</span>
                                </a>
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="project-card2 gx-0">
                <Col sm={8}>
                    <Row >
                    <Image src={proto2}/>
                    </Row>
                    <Row>
                        <Col xs = {12} sm={12} m={12} l ={8} xl={8} className="project-desc">
                        <h4>USAID CIDI Donation Guide</h4>
                        <p>
                        Webpage redesign to better communicate the efficacy of cash donations
                        </p>
                        </Col>
                        <Col xs={3} sm={2} m={2} l={1} xl={1} className="proj-links">
                        <Col>
                            <Row>
                            <a href="https://docs.google.com/document/d/1TImzhc7mZ-a7JSI5NGpmAj3JFb4W75Wj_6n6MGaQmWs/edit?usp=sharing" style={{textDecoration:'none', color:'inherit'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" class="bi bi-file-earmark-text" style={{minWidth:"25px" ,borderStyle:"solid", padding:"5px", borderRadius:"0.5em", borderWidth:"0.2em"}} viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                            </svg>
                            <span>Details</span>
                            </a>
                            </Row>
                        </Col>
                        <Col >
                            <Row>
                            <a href="https://www.figma.com/file/Cb6Eb6gmQtMSZfS8Vp2OUB/USAID-%2B-T4SG-Design?node-id=1%3A2&t=VzXlO1iK6d6IfnhG-1" style={{textDecoration:'none', color:'inherit'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" style={{minWidth:"25px", borderStyle:"solid", padding:"5px", borderRadius:"0.5em", borderWidth:"0.2em"}} viewBox="0 0 16 16">
                            <path d="M5 1v8H1V1h4zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm13 2v5H9V2h5zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9zM5 13v2H3v-2h2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3zm12-1v2H9v-2h6zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9z"/>
                            </svg>
                            <span>Prototypes</span>
                            </a>
                            </Row>
                        </Col>
                        </Col>
                    </Row>
                </Col>
                <Col sm={4} className="cidi-banner">
                    <Image src={cidi} style={{width:"90%"}}/>
                </Col>
            </Row>
            <h3>Software Development</h3>
            <Row>
                <Col className="swe-card gx-0">
                    <Row>
                        <Image src={autodiff}/>
                    </Row>
                    <Row className="project-desc" style={{textAlign:"center"}}>
                        <h4>AD39 Package</h4>
                        <p style={{padding:0}}>
                        Python library for performing forward and reverse mode variants of automatic differentiation
                        </p>
                        <a href="https://github.com/ayzo279/ad39" style={{textDecoration:'none', color:'inherit'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" style={{maxWidth:"3em", borderStyle:"solid", padding:"5px", margin:"auto", borderRadius:"0.5em", borderWidth:"0.2em"}}class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        </a>
                        <span style={{fontSize:"12px"}}>View Code</span>
                    </Row>
                </Col>
                <Col className="swe-card gx-0">
                <Row>
                        <Image src={crim}/>
                    </Row>
                    <Row className="project-desc" style={{textAlign:"center"}}>
                        <h4>CrimsonConnect</h4>
                        <p style={{padding:0}}>
                        Web-based social media platform aimed at Harvard undergrads in pandemic isolation
                        </p>
                        <a href="https://github.com/ayzo279/crimsonconnect" style={{textDecoration:'none', color:'inherit'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" style={{maxWidth:"3em", borderStyle:"solid", padding:"5px", margin:"auto", borderRadius:"0.5em", borderWidth:"0.2em"}}class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        </a>
                        <span style={{fontSize:"12px"}}>View Code</span>
                    </Row>
                </Col>
            </Row>
            <h3>Creative Coding and Graphic Design</h3>
            <p style={{fontSize:"18px", fontFamily: "MontserratLight"}}>A selection of data visualization and generative art sketches created using p5.js on OpenProcessing</p>
            <Row>
            <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                    <div className="design">
                        <Image src={echo} className="p5"/>
                        <div className="design-desc">
                            <h4>echo.</h4>
                            <p style={{fontFamily:"MontserratLight", fontSize: "14px"}}>an interactive sound and dance visualizer using ml.js to track and replay a user’s movements to a selected song</p>
                            <a href="https://www.oppr.org/s/2obFcAqp" style={{textDecoration:'none', color:'inherit'}}>
                            <p style={{fontFamily: "MontserratSB", textDecoration:"underline", fontSize: "12px", margin:"50px 0 0 0"}}>view</p>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                    <div className="design">
                    <Image src={deluge} className="p5"/>
                    <div className="design-desc">
                        <h4>deluge</h4>
                        <p style={{fontFamily:"MontserratLight", fontSize: "14px"}}>data visualization piece for mental health awareness using data obtained from the CDC</p>
                        <a href="https://www.oppr.org/s/m7Coi2SJ" style={{textDecoration:'none', color:'inherit'}}>
                        <p style={{fontFamily: "MontserratSB", textDecoration:"underline", fontSize: "12px", margin:"50px 0 0 0"}}>view</p>
                        </a>
                    </div>
                    </div>
                </Col>
                <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                    <div className="design">
                    <Image src={music} className="p5"/>
                    <div className="design-desc">
                        <h4>emotion in music</h4>
                        <p style={{fontFamily:"MontserratLight", fontSize: "14px"}}>sound visualizer using data from UC Berkelery study to depict emotional associations with select musical pieces</p>
                        <a href="https://www.oppr.org/s/RgcrmhNf" style={{textDecoration:'none', color:'inherit'}}>
                        <p style={{fontFamily: "MontserratSB", textDecoration:"underline", fontSize: "12px", margin:"50px 0 0 0"}}>view</p>
                        </a>
                    </div>
                    </div>
                </Col>
                <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                    <div className="design">
                    <Image src={starcolor} className="p5"/>
                    <div className="design-desc">
                        <h4>starcolor</h4>
                        <p style={{fontFamily:"MontserratLight", fontSize: "14px"}}>a color-matching minigame</p>
                        <a href="https://www.oppr.org/s/IOS4FTjX" style={{textDecoration:'none', color:'inherit'}}>
                        <p style={{fontFamily: "MontserratSB", textDecoration:"underline", fontSize: "12px", margin:"50px 0 0 0"}}>view</p>
                        </a>
                    </div>
                    </div>
                </Col>
            </Row>
            <p style={{fontSize:"18px", fontFamily: "MontserratLight"}}>A selection of designs created using Adobe Creative Suite</p>
            <Row style={{display: "flex", alignItems:"center",justifyContent: "center"}}>
            <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                    <div className="design">
                        <Image src={mslogo} className="p5"/>
                        <div className="design-desc">
                            <p style={{fontFamily:"MontserratLight"}}>Logo concept for Harvard’s program on aesthetics and cultural economics in Milan and Siena, Italy</p>
                        </div>
                    </div>
                </Col>
                <Col xl={3} lg={6} md={6} sm={6} xs={12}>
                    <div className="design">
                    <Image src={lowell} className="p5"/>
                    <div className="design-desc">
                        <p style={{fontFamily:"MontserratLight"}}>Merch design concept for Harvard's Lowell House</p>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}