import React, {
    useCallback,
    useRef,
    useState
  } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { WaveSurfer, WaveForm, Region } from "wavesurfer-react";



const useStyles = makeStyles(styles);

export default function MusicSection(props) {
  const {wavuri, wavindex, thumbsrc, musicname, author, status } = props;
  const [playtime, setPlayTime] = useState(props.playtime);
  const [score, setScore] = useState(props.score);
  const [order_flag, setOrderFlag] = useState(props.order_flag);
  
  const wavesurferRef = useRef();
  const handleWSMount = useCallback(
    waveSurfer => {
      wavesurferRef.current = waveSurfer;
      if (wavesurferRef.current) {
        let wuri = {wavuri}.valueOf();
        wavesurferRef.current.load(wuri.wavuri);
        wavesurferRef.current.on("ready", () => {
          console.log("WaveSurfer is ready");
        });

        wavesurferRef.current.on("loading", data => {
          console.log("loading --> ", data);
        });

        if (window) {
          window.surferidze = wavesurferRef.current;
        }
      }
    },
  );
  const play = useCallback(() => {
    wavesurferRef.current.playPause();
  }, []);
  let button;
  if (order_flag){
    button = <Button variant="contained" 
    size="lg"
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => this.setOrderFlag(!order_flag)}
    >
    Add to cart
  </Button>;
  }else{
    button = <Button variant="contained" 
    size="lg"
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => this.setOrderFlag(!order_flag)}
    >
    Remove
  </Button>;
  }
  return (
    <div className="div-music">
        <GridItem className="mitem1" cs={12} sm={12} md={5}>
            <img src ={thumbsrc}></img>
            <span onClick={play}>{playtime}</span>
            <WaveSurfer onMount={handleWSMount}>
                <WaveForm id={wavindex}>
                </WaveForm>
            </WaveSurfer>
        </GridItem>
        <GridItem className="mitem2" cs={12} sm={12} md={3}>
            <span onClick={play}>{musicname}</span>
            <a href="#" className="author">{author}</a>
        </GridItem>
        <GridItem className="mitem3" cs={12} sm={12} md={4}>
            <span className="mname">{status}</span>
            <span className="mmark">{score}</span>
            <span className="mheart">
                {/* <i className="fas like fa-heart"></i> */}
                <img src ={require("assets/img/heart.jpg")}></img>
            </span>
            {button}
        </GridItem>
    </div>
  );
}
