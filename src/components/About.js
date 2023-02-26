import React from "react";
import { Container, Image} from "react-bootstrap";
import profile from '../assets/img/profile.png'
import profile2 from '../assets/img/profile2.png'

export const About = () => {
    return (
        <div id="home">
        <section className="banner">
            <Container>
                <h1 className="animate fadeInLeft fade-delay">Hi there! I'm <span className="about">Andy</span>, an aspiring <span className="about">product designer</span> from Philadelphia<br></br>studying Computer Science 
                and Economics at Harvard University.<br></br>I'm passionate about projects at the intersection of <span className="about">tech and design.</span></h1>
                <p></p>
            <Image src ={profile} className="prof-img floating"/>
            <Image src ={profile2} className="prof-img2 floating"/>
            </Container>
        </section>
        </div>
    )
}