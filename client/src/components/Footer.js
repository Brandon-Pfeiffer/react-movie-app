import React from "react";
import {Link} from "react-router-dom";

export const Footer = (props) => (
    <footer className="page-footer cyan lighten-3" style={Style.footer}>
      <div className="container">
        <div className="row">
          <div className="col l4 s12">
            <h5 className="white-text">Lit Bayou</h5>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Navigation</h5>
            <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/explore'>Explore</Link></li>
            </ul>
          </div>
          <div className="col l4 s12">
            <img src="https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png" alt="The Movie Database" style={Style.img}/>
          </div>

        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2018 Team Gudetama
        </div>
      </div>
    </footer>
)

const Style = {
  footer: {
    marginTop: '10%'
  },
  img: {
    height: "80px",
    width: "200px",
    marginLeft: "20px",
    marginTop: '5%'
  },
  container: {
    textAlign: "center"
  }

}