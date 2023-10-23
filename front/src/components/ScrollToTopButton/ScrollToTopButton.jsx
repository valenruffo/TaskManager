import React, { useState, useEffect } from "react";
import Icon from "@mui/material/Icon";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import './ScrollToTopButton.css'

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
    } 
    else if (scrolled <= 200){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, [])

  return (
    <button className="scroll-to-top" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
      <Icon>
        <ArrowUpwardIcon className="arrow-color"/>
      </Icon>
    </button>
  );
};

export default ScrollToTopButton;
