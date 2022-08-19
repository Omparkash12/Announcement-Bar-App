import React from 'react'
import Heading from '../../Shared/Heading/Heading';

const BorderRadius = (props) => {
    return (
        <section className="font-Size-Section">
            <div className='font-size-data'>
                <Heading tab_heading='Select Border Radius' />

                <form action="fontSize.php" className="font-input-os">
                    <select onChange={props.onchangeBorderRadius} name="select-font">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <button className='form-submit-os' type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default BorderRadius;