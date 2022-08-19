import React, { useEffect } from 'react';
import './AddReview.css'

const AddReview = () => {

    useEffect(() => {


        (function() {
            window.onload = function () {
                let element = document.getElementById("continue-os");
                element.classList.add("review-active-button");
              }

            var button = document.querySelector('.continue-os');
            var box = document.querySelector('.cancel-os');
          
            button.addEventListener('click', function() {
              
                button.classList.add('review-active-button');
                box.classList.remove('review-active-button');
              console.log("working1")
          
            });

            box.addEventListener('click', function() {
              
                box.classList.add('review-active-button');
                button.classList.remove('review-active-button');
              console.log("working2")
          
            });
            
          })();




    }, [])


    return (
        <section className='AddReview-section-os'>
            <div className='review-form-data-os'>
                <div className="review-data-os">
                    <div className="border-container">
                        <div className="review-navigation">
                            <button className="back-arrow-os">
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM22 7L1 7V9L22 9V7Z" fill="black" />
                                </svg>
                            </button>
                            <h5>Add a reviews</h5>
                            <button className="page-close-os">
                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.31738 0.046875L4.42969 3.67676L6.54199 0.046875H8.51758L5.50977 4.97559L8.59277 10H6.59668L4.42969 6.30176L2.2627 10H0.259766L3.34961 4.97559L0.334961 0.046875H2.31738Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                        <div className="review-options-os">
                            <div className='review-type-1'>
                                <input type="radio" id="test1" name="radio-group" checked />
                                <label htmlFor="test1">Add reviews manually</label>
                            </div>
                            <div className='review-type-2'>
                                <input type="radio" id="test2" name="radio-group" />
                                <label htmlFor="test2">Add an embed code</label>
                            </div>
                        </div>

                        <div id='review-action-buttons-os' className="review-action-buttons-os">
                            <button type='submit' id='continue-os' className="eooo continue-os">Continue</button>
                            <button id='cancel-os' className="eooo cancel-os">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddReview;