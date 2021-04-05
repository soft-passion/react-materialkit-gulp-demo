import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import MusicSection from "./Sections/MusicSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  let musics = [
    {wavindex: "w1", wavuri:"1.wav", thumbsrc:require("assets/img/m1.jpg"), playtime:"22:30", musicname:"Donk17 GWet.wav", author:"Gopnik McBlyat", status:"Dmin", score:"120", order_flag:true},
    {wavindex: "w2", wavuri:"2.wav", thumbsrc:require("assets/img/m1.jpg"), playtime:"22:30", musicname:"Donk17 GWet.wav", author:"Gopnik McBlyat", status:"Dmin", score:"120", order_flag:false},
    {wavindex: "w3", wavuri:"1.wav", thumbsrc:require("assets/img/m1.jpg"), playtime:"22:30", musicname:"Donk17 GWet.wav", author:"Gopnik McBlyat", status:"Dmin", score:"120", order_flag:true},
    {wavindex: "w4", wavuri:"2.wav", thumbsrc:require("assets/img/m1.jpg"), playtime:"22:30", musicname:"Donk17 GWet.wav", author:"Gopnik McBlyat", status:"Dmin", score:"120", order_flag:false},
    {wavindex: "w5", wavuri:"1.wav", thumbsrc:require("assets/img/m1.jpg"), playtime:"22:30", musicname:"Donk17 GWet.wav", author:"Gopnik McBlyat", status:"Dmin", score:"120", order_flag:true},
    {wavindex: "w6", wavuri:"2.wav", thumbsrc:require("assets/img/m1.jpg"), playtime:"22:30", musicname:"Donk17 GWet.wav", author:"Gopnik McBlyat", status:"Dmin", score:"120", order_flag:true}
  ];

  return (
    <div className="div-landing">
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
              <div className="sign-div">
              <Button  variant="contained" 
                size="lg"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up for free
              </Button>
              </div>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h2>Trending vocals</h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            {musics.map((music,index) => (
              <MusicSection 
              wavindex={music.wavindex + "1"}
              wavuri={music.wavuri}
              thumbsrc={music.thumbsrc}
              playtime={music.playtime}
              musicname={music.musicname}
              author={music.author}
              status={music.status}
              score={music.score}
              order_flag={music.order_flag}
            />
            ))}
            
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          {musics.map((music,index) => (
              <MusicSection 
              wavindex={music.wavindex + "2"}
              wavuri={music.wavuri}
              thumbsrc={music.thumbsrc}
              playtime={music.playtime}
              musicname={music.musicname}
              author={music.author}
              status={music.status}
              score={music.score}
              order_flag={music.order_flag}
            />
            ))}
          </GridItem>  
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className="div-all-link">
            <Button  variant="contained"
                size="lg"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse all vocals
              </Button>
          </GridItem>
        </GridContainer>
      </div>
      
    </div>
  );
}
