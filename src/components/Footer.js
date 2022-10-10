import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
import {
  BsTwitch,
  BsDiscord,
  BsYoutube,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer style={{ borderTop: "10px solid #2d8046" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-logo">
              <a
                style={{ textDecoration: "none" }}
                rel="noopener noreferrere"
                target="_blank"
                href="https://digital-tectonics.com/index.php"
              >
                <img src={logo} alt="logo" />
                <span>Digital Technotics</span>
              </a>
              <ul className="footer-contact">
                <li>
                  <span>Contact Us Today:</span>
                  <div className="link-container">
                    <a
                      id="contact_email"
                      href="mailto:info@digital-tectonics.com"
                    >
                      info@digital-tectonics.com
                    </a>
                    <div className="link-to-clipboard">
                      <i
                        className="fa fa-link"
                        onclick="copyToClipboard(\'info@digital-tectonics.com\')"
                      ></i>
                    </div>
                  </div>
                  <div className="link-container">
                    <a href="tel:7046591429">(704) 659-1429</a>
                    <div className="link-to-clipboard">
                      <i
                        className="fa fa-link"
                        onclick="copyToClipboard(\'7046591429\')"
                      ></i>
                    </div>
                  </div>
                </li>
                <li>2016-2022 Digital Tectonics LLC ALL RIGHTS RESERVED</li>
              </ul>
              <div>Don't miss our updates</div>
              <br />
              <ul className="social-icons">
                <li>
                  <a href="https://www.linkedin.com/company/75068453/">
                    <BsLinkedin size="1rem" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/DigitalTectonics">
                    <BsGithub size="1rem" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/DigitalTectonic">
                    <BsTwitter size="1rem" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCe12XWN_kQ3v9eje-GJHYmQ">
                    <BsYoutube size="1rem" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitch.tv/digital_tectonics">
                    <BsTwitch size="1rem" />
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/gHdZnXNmuh">
                    <BsDiscord size="1rem" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-nav">
              <h5>Services</h5>
              <ul className="footer-links">
                <li>
                  <a href="#anchor-our-services">Android App Development</a>
                </li>
                <li>
                  <a href="#anchor-our-services">iOS App Development</a>
                </li>
                <li>
                  <a href="#anchor-our-services">UI/UX Design</a>
                </li>
                <li>
                  <a href="#anchor-our-services">Project Management</a>
                </li>
                <li>
                  <a href="#anchor-our-services">Quality Assurance</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-nav">
              <h5>Company</h5>
              <ul className="footer-links">
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="about.php">About Us</a>
                </li>
                <li>
                  <a href="about.php#anchor-contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <br />© Copyright 2022 Digital Tectonics LLC
        </div>
      </div>
    </footer>
  );
}
