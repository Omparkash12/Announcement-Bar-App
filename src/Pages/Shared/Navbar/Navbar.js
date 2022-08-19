import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


// // Images
// import brand_icon from '../../Assets/nav_brand_icon.svg';

const Navbar = () => {
    return (
        <>
            <section className="sideNav">
                <div className="sideNav-data">
                    <div className="tabs-os">
                        <div className="tab-os">
                            <input type="checkbox" id="chck1" />
                            <label className="tab-label" htmlFor="chck1">Customize Promotion Bar</label>
                            <div className="tab-content">
                                <Link to='/backgroundcolor' className="tab-content-os center-tab-os center-tab-os">
                                    Promotion Bar Background Color
                                </Link>
                                <Link to='/textcolor' className="tab-content-os center-tab-os">
                                    Promotion Bar Text Color
                                </Link>
                                <Link to='/fontsize' className="tab-content-os center-tab-os">
                                    Promotion Bar Font Size
                                </Link>
                                <Link to='/borderradius' className="tab-content-os">
                                    Promotion Bar Border-Radius
                                </Link>                                
                            </div>
                        </div>
                        <div className="tab-os">
                            <input type="checkbox" id="chck2" />
                            <label className="tab-label" htmlFor="chck2">Customize Promotion Button</label>
                            <div className="tab-content">
                                <Link to='/#' className="tab-content-os center-tab-os">
                                    Button Text Color
                                </Link>
                                <Link to='/#' className="tab-content-os center-tab-os">
                                    Button Background Color
                                </Link>
                                <Link to='/#' className="tab-content-os center-tab-os">
                                    Button Border Radius
                                </Link>
                                <Link to='/#' className="tab-content-os">
                                    Button Font Size
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Navbar;