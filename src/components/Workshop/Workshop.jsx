import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import bailey from "../../Assets/bailey.jpg";
import ning from "../../Assets/ning.jpg";
import khadija from "../../Assets/khadija.jpg";
import mahdeen from "../../Assets/mahdeen.jpg";
import hasti from "../../Assets/hasti.jpg";
import minh from "../../Assets/minh.jfif";
import steeve from "../../Assets/steeve.jpg";
import aradhya from "../../Assets/aradhya.jfif";
import nikhil from "../../Assets/nikhil.jpg";
import arianne from "../../Assets/arianne.JPG";
import sourish from "../../Assets/sourish.jpg";



const Workshop = () => {
  return (
    <div id="teamp" className="container">
      <div className="teamtitle"  data-aos="fade-up"><p>Meet the Team</p></div>
      <div className="main-body" data-aos="fade-up" >
      <div className="row">
        <div className="col-md-3">
          <div className="team-member" >
            <img src={minh} alt="Profile 2" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Minh Vu</h3>
            <p data-aos="fade-up">Co-chair</p>
            <div className="social-icons" data-aos="fade-up" >
              <a href="https://www.linkedin.com/in/minh-n-vu/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:name2@email.com">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="team-member">
            <img src={bailey} alt="Profile 1" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Bailey Luu</h3>
            <p data-aos="fade-up">Co-chair</p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://www.linkedin.com/in/baileyluu/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:name1@email.com">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="team-member">
            <img src={ning} alt="Profile 2" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Ning Ma</h3>
            <p data-aos="fade-up">Logistics</p>
            <p data-aos="fade-up">Hackathon Experience</p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://www.linkedin.com/in/wnmwnm/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:wnm@my.yorku.ca">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="team-member">
            <img src={mahdeen} alt="Profile 2" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Mahdeen Islam</h3>
            <p data-aos="fade-up">Logistics</p>
            <p data-aos="fade-up">Vendors & Providers</p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://www.linkedin.com/in/mahdeen/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:smi15@my.yorku.ca">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="team-member">
            <img src={steeve} alt="Profile 1" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Steeve-Johan</h3>
            <p data-aos="fade-up">Logistics</p>
            <p data-aos="fade-up">Hackathon Experience</p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://www.linkedin.com/in/johanotoka/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:jotok15@my.yorku.ca">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="team-member">
            <img src={sourish} alt="Profile 1" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Sourish Dayalan</h3>
            <p data-aos="fade-up">Finance</p>
            <p data-aos="fade-up">VP Finance</p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://www.linkedin.com/in/sourish-dayalan-68027123b/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:dsourishdayalan@gmail.com">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="team-member">
            <img src={arianne} alt="Profile 1" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Arianne Ghislaine Rull</h3>
            <p data-aos="fade-up">Marketing</p>
            <p data-aos="fade-up">Designer</p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://www.linkedin.com/in/arianne-ghislaine-rull-93690415a/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:arianneghislaine@gmail.com">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="team-member">
            <img src={khadija} alt="Profile 1" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Khadija Aftab</h3>
            <p data-aos="fade-up">Marketing</p>
            <p data-aos="fade-up">Photographer</p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://www.linkedin.com/in/khadija-aftab-1b4885238/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:kaftab@my.yorku.ca">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="team-member">
            <img src={hasti} alt="Profile 1" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Hasti Ghaneshirazi</h3>
            <p data-aos="fade-up">Technology</p>
            <p data-aos="fade-up">Social Media Community Manager</p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://www.linkedin.com/in/hasti-ghaneshirazi/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:name1@email.com">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="team-member">
            <img src={nikhil} alt="Profile 1" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Nikhil Sharma</h3>
            <p data-aos="fade-up">Technology</p>
            <p data-aos="fade-up">Web Developer</p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://www.linkedin.com/in/nikhilsharma26500/">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/nikhilsharma26500">
                <FaGithub/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="team-member">
            <img src={aradhya} alt="Profile 1" className="img-fluid" data-aos="fade-up" />
            <h3 data-aos="fade-up">Aradhya Singh</h3>
            <p data-aos="fade-up">Technology</p>
            <p data-aos="fade-up">Web Developer</p>
            <div className="social-icons" data-aos="fade-up">
              <a href="https://www.linkedin.com/in/aradhyas8/">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/aradhyas8">
                <FaGithub/>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
