import React from 'react';
import Heading from '../../Shared/Heading/Heading';
import '../BackgroundColor/BackgroundColor.css';
import '../FontSize/FontSize.css';

const TextColor = (props) => {
    return (
        <section className="textColor-section-os">
            <Heading tab_heading='Select Text Color' />

            <form action="TextColor.php" className="input-font-os">
                    <div className="background-data">
                        <div className="color-input-os">
                            <input type="color" name='input-bg-color' onChange={props.onchangeTextColor} value={`${props.textColor}`} />
                        </div>
                        <div className="input-color-code-os">
                            <span>{props.textColor}</span>
                        </div>
                    </div>
                    <button className='form-submit-os' type="submit">Submit</button>

                </form>
        </section>
    )
}

export default TextColor;