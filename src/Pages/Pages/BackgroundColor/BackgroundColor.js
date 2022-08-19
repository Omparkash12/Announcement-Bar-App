import React, { useEffect } from 'react';
import Heading from '../../Shared/Heading/Heading';
import './BackgroundColor.css';

const BackgroundColor = (props) => {
    // const [bgColor, setBgColor] = useState('#000');

    // const onchangeHandle = (event) => {
    //     setBgColor(event.target.value)
    //     console.log("change is working");
    // }

    useEffect(() => {

        // Just fancy stuff!! 
        //Added only for accepting the color input and changing body background
        // const body = document.querySelector(".color-input-os input");
        // const input = document.getElementById("colorPicker");
        // const colorCode = document.getElementById("colorCode");

        // setColor();
        // input.addEventListener("input", setColor);

        // function setColor() {
        //     body.style.backgroundColor = input.value;
        //     colorCode.innerHTML = input.value;
        // }



    }, [])


    return (
        <>
        <section className="select-background-section"></section>
            <div className='font-size-data'>
                {/* <div className="input-heading-os">Select Background Color</div> */}
                <Heading tab_heading={props.BackgroundColor_Heading} />

                <form action="background.php" className="input-font-os">
                    {/* <input className='color-input-os' type="color" value="#e0ffee" id="colorPicker" />
                    <b>Current color code: <code id="colorCode"></code></b> */}

                    <div className="background-data">
                        <div className="color-input-os">
                            <input type="color" name='input-bg-color' onChange={props.onchangeBackground} value={`${props.bgColor}`} id="" />
                        </div>
                        <div className="input-color-code-os">
                            <span>{props.bgColor}</span>
                        </div>
                    </div>
                    <button className='form-submit-os' type="submit">Submit</button>

                </form>
            </div>
        </>
    )
}

export default BackgroundColor;