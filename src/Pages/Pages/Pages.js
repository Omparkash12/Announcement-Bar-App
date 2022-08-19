import React, { useState } from 'react'
import Navbar from '../Shared/Navbar/Navbar';
import './Pages.css';
import { Routes, Route } from "react-router-dom";
import FontSize from './FontSize/FontSize';
import BackgroundColor from './BackgroundColor/BackgroundColor';
import BorderRadius from './BorderRadius/BorderRadius';




// Images
import brand_icon from '../Assets/nav_brand_icon.svg';


const Pages = () => {

    // Mobile toggle Button
    function myNavToggle() {
        const navToggle = document.getElementById("navbar-container-os");
        navToggle.classList.toggle("myNavToggle-style");
    }



    // Change Background
    const [bgColor, setBgColor] = useState('#000');

    const onchangeBackground = (event) => {
        setBgColor(event.target.value)
        console.log("BackgroundChange is working");
    }


    // Change FontSize
    const [fontSize, setFontSize] = useState('12');

    const onChangeFontSize = (event) => {
        setFontSize(event.target.value);
        console.log("fontSizeChange is working");
    }


    // Change TextColor
    const [textColor, setTextColor] = useState('#fff');
    const onchangeTextColor = (event) => {
        setTextColor(event.target.value);
        console.log("textColorChange is working");
    }

    // Change BorderRadius
    const [boderRadius, setBorderRadius] = useState('0');
    const onchangeBorderRadius = (event) => {
        setBorderRadius(event.target.value);
        console.log("borderRadiusChange is working");
    }







    return (
        <div className='all-pages-os'>
            <div id='"mobile-navbar-filter' className="mobile-navbar-filter">
                <div className="toggle-icon" onClick={myNavToggle}>
                    <div className="toggle-line_1"></div>
                    <div className="toggle-line_1 middle-line"></div>
                    <div className="toggle-line_1"></div>
                </div>
            </div>
            <div id='navbar-container-os' className="navbar-container-os">
                <Navbar brand_icon={brand_icon} navLink_1='Dashboard' navLink_2='Funnels' navLink_3='Statistics' navLink_4='Help' navLink_5='Pricing' navLink_6='Setting' />
            </div>
            <div className="whole-pages-container-os">
                <section className="announcement-bar">
                    <div style={{ backgroundColor: `${bgColor}`, borderRadius: `${boderRadius}px` }} className="announce-data">
                        <div className="announce-text" style={{ fontSize: `${fontSize}px`, color: `${textColor}`, borderRadius: `${boderRadius}px` }}>
                            Special Offer 20% Off at All Products
                        </div>
                    </div>
                </section>
                {/* <Routes>
                    <Route exact path='/addreview' element={<AddReview />} />
                </Routes> */}

                <div className="all-tabs-os">
                    <Routes>
                        <Route exact path='/fontsize' element={<FontSize onChangeFontSize={onChangeFontSize} />} />
                    </Routes>
                    <Routes>
                        <Route exact path='/backgroundcolor' element={<BackgroundColor bgColor={bgColor} onchangeBackground={onchangeBackground} BackgroundColor_Heading='Select Background Color' />} />
                    </Routes>
                    <Routes>
                        <Route exact path='/textcolor' element={<BackgroundColor bgColor={textColor} onchangeBackground={onchangeTextColor} BackgroundColor_Heading='Select Text Color' />} />
                    </Routes>
                    {/* <Routes>
                        <Route exact path='/textcolor' element={<TextColor onchangeTextColor={onchangeTextColor} textColor={textColor} />} />
                    </Routes> */}
                    <Routes>
                        <Route exact path='/borderradius' element={<BorderRadius onchangeBorderRadius={onchangeBorderRadius} />} />
                    </Routes>
                    {/* <AddReview /> */}
                    {/* <OverView /> */}
                    {/* <FontSize /> */}
                    {/* <BackgroundColor /> */}
                    {/* <TextColor /> */}
                    {/* <BorderRadius /> */}
                </div>
            </div>
        </div>
    )
}

export default Pages;