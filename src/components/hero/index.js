import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    const birthday = "01/28/2023";
    const countDown = new Date(birthday).getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      if (distance < 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(x);
      } else {
        setCountdown({
          days: Math.floor(distance / day),
          hours: Math.floor((distance % day) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second),
        });
      }
    }, 1000);
    return () => clearInterval(x);
  }, []);

  return (
    <div id="main-landing">
      <div className="hero section">
        <div className="container">
          <div className="row">
            <div
              className="col-md-10 flex-bottom columnn club"
              data-aos="fade-up"
            >
              CS HUB introduces
            </div>
            <div className="col-md-2 columnn venu" data-aos="fade-up">
              JOIN US AT <br />{" "}
              <a href="https://goo.gl/maps/8jvW3bwmUn2tzU3P7">
                BERGERON CENTER
              </a>{" "}
              <br /> ON JAN 28 @ 9 AM
            </div>

            <div className="col-md-10 columnn main-title" data-aos="fade-up">
              LOCAL <br /> HACK DAY 2023
            </div>
            <div className="col-md-2 columnn counter" data-aos="fade-up">
              <ul>
                <li>
                  <span id="days">{countdown.days}</span>days
                </li>
                <li>
                  <span id="hours">{countdown.hours}</span>Hours
                </li>
                <li>
                  <span id="minutes">{countdown.minutes}</span>Minutes
                </li>
                <li>
                  <span id="seconds">{countdown.seconds}</span>Seconds
                </li>
              </ul>
            </div>
          </div>
          <div className="row mob-only">
            <div className="col-md-12 columnn mob-venu" data-aos="fade-up">
              JOIN US AT <br /> <a href="#">BERGERON CENTER</a> <br /> ON JAN 28
              @ 9 AM
            </div>
            <div className="col-md-12 columnn mob-counter" data-aos="fade-up">
              <ul>
                <li>
                  <span id="days">{countdown.days}</span>days
                </li>
                <li>
                  <span id="hours">{countdown.hours}</span>Hours
                </li>
                <li>
                  <span id="minutes">{countdown.minutes}</span>Minutes
                </li>
                <li>
                  <span id="seconds">{countdown.seconds}</span>Seconds
                </li>
              </ul>
            </div>
            <div className="button_register" data-aos="fade-up">
              <a
                className="btn button-val btn-primary"
                href="https://organize.mlh.io/participants/events/9026-cshub-local-hack-day"
                role="button"
              >
                REGISTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
