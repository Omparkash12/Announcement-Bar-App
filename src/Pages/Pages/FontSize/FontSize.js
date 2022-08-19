import React, { useEffect } from 'react';
import Heading from '../../Shared/Heading/Heading';
import './FontSize.css';

const FontSize = (props) => {

    useEffect(() => {



    }, [])


    return (
        <>
            <section className="font-Size-Section">
                <div className='font-size-data'>
                    {/* <div className="input-heading-os">Select Font Size</div> */}
                    <Heading tab_heading='Select Font Size' />

                    <form action="fontSize.php" className="font-input-os">
                        <select onChange={props.onChangeFontSize} name="select-font">
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="16">16</option>
                            <option value="18">18</option>
                            <option value="20">20</option>
                            <option value="22">22</option>
                            <option value="24">24</option>
                            <option value="26">26</option>
                            <option value="28">28</option>
                            <option value="30">30</option>
                            <option value="32">32</option>
                        </select>
                        <button className='form-submit-os' type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default FontSize;