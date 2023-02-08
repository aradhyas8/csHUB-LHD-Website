import React from 'react';
import './timeline.css';

const Timeline = () => {
    return (
        <div id="timelinep" className="container">
            <div className="timeline-title" data-aos="fade-up"><p>Workshops</p></div>
        <div className="timeline-section">
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot" data-aos="fade-up"></div>
                    <div className="timeline-date" data-aos="fade-right">23 January <br />Monday </div>
                    <div className="timeline-content" data-aos="fade-right">
                        <h3>Mastering Vue.js: Building a Dynamic Click Counter</h3>
                        <div className="timeline-info" data-aos="fade-right">
                            <div>Host Name:<span className="host-name">Melhem</span></div>
                            <div>Timing: 6:30 PM - 7:30 PM</div>
                            <div>Delivery: Virtual</div>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot" data-aos="fade-up"></div>
                    <div className="timeline-date" data-aos="fade-left">25 January <br />Wednesday</div>
                    <div className="timeline-content" data-aos="fade-left">
                        <h3>Unleashing the Power of AI: Building Your First Application with AssemblyAI</h3>
                        <div className="timeline-info" data-aos="fade-left">
                            <div>Host Name: <span className="host-name">Neel</span></div>
                            <div>Timing: 12:00 PM - 1:00 PM</div>
                            <div>Delivery: Virtual</div>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot" data-aos="fade-up"></div>
                    <div className="timeline-date" data-aos="fade-right">26 January <br />Thursday</div>
                    <div className="timeline-content" data-aos="fade-right">
                        <h3>Designing with Figma: From Concept to Creation</h3>
                        <div className="timeline-info" data-aos="fade-right">
                            <div>Host Name: <span className="host-name">Steeve-Johan</span></div>
                            <div>Timing: 6:00 PM - 7:00 PM</div>
                            <div>Delivery: Virtual</div>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot" data-aos="fade-up"></div>
                    <div className="timeline-date" data-aos="fade-left">27 January <br />Friday</div>
                    <div className="timeline-content" data-aos="fade-left">
                        <h3>React.js Fundamentals: Building a Weather App from Scratch</h3>
                        <div className="timeline-info" data-aos="fade-left">
                            <div>Host Name: <span className="host-name">Adam</span></div>
                            <div>Timing: 4:00 PM - 5:00 PM</div>
                            <div>Delivery: Virtual</div>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot" data-aos="fade-up"></div>
                    <div className="timeline-date" data-aos="fade-right">27 January <br />Friday</div>
                    <div className="timeline-content" data-aos="fade-right">
                        <h3>Exploring the Possibilities of AI-Generated Art</h3>
                        <div className="timeline-info" data-aos="fade-right">
                            <div>Host Name: <span className="host-name">Mahdeen Islam</span></div>
                            <div>Timing: 5:30 PM - 6:30 PM</div>
                            <div>Delivery: Virtual</div>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot" data-aos="fade-up"></div>
                    <div className="timeline-date" data-aos="fade-left">28 January <br />Saturday</div>
                    <div className="timeline-content" data-aos="fade-left">
                        <h3>Fun with IoT: Programming a Drone to Detect Objects using Azure</h3>
                        <div className="timeline-info" data-aos="fade-left">
                            <div>Host Name: <span className="host-name">Bruno</span></div>
                            <div>Timing: 10:30 AM - 11:30 AM</div>
                            <div>Delivery: In-Person</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Timeline;

                           
