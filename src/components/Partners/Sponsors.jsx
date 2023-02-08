import React from "react";
import github from '../../Assets/github.png'
import mlh from '../../Assets/mlh.png'
import les from '../../Assets/les.png'
import radix from '../../Assets/radix.png'
import stack from '../../Assets/stack.png'
import twilio from '../../Assets/twilio.png'
import yfs from '../../Assets/yfs.png'
import ovra from '../../Assets/ovra.jfif'
import echo from '../../Assets/echo.webp'
import AOS from "aos";
import "aos/dist/aos.css";

const Sponsors = () => {
  return (
    <div id="sponsorsp">
    <div className="sponsors flex-section">
      <div className="container">
        <div className="sponsors-title"  data-aos="fade-up"><p>Sponsors & Partners</p></div>
        <div className="row">
          <div className="partners col-sm">
            <div className="head"  data-aos="fade-up">Sponsors</div>
            <div className="col">
            <a href="https://lassonde.yorku.ca/"  data-aos="fade-up">
              <img src={les} style={{zIndex:"1"}}/>
              </a>
            </div>
            <div className="col">
            <a href="https://github.com"  data-aos="fade-up">
              <img src={mlh} />
              </a>
            </div>
          </div>
                    <div className="partners col-sm">
            <div className="head"  data-aos="fade-up">In-Kind</div>
            <div className="col">
            <a href="https://github.com"  data-aos="fade-up">
              <img src={github} />
              </a>
            </div>
            <div className="col">
            <a href="https://www.twilio.com/"  data-aos="fade-up">
              <img src={twilio} />
              </a>
            </div>
            <div className="col">
            <a href="https://stackoverflow.com/"  data-aos="fade-up">
              <img src={stack} />
              </a>
            </div>
            <div className="col">
            <a href="https://www.radixdlt.com/"  data-aos="fade-up">
              <img src={radix} />
              </a>
            </div>
            <div className="col">
            <a href="https://www.echo3d.com/brand"  data-aos="fade-up">
              <img src={echo} />
              </a>
            </div>
          </div>
          <div className="partners col-sm">
            <div className="head"  data-aos="fade-up">Partners</div>
            <div className="col">
            <a href="https://ovra.io/"  data-aos="fade-up">
              <img src={ovra} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sponsors;
