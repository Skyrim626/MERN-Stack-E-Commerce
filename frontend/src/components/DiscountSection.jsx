import React, { useState, useEffect } from 'react'
import "../css/discountsection.css";
import discountImage from "../assets/images/discount-image.png"

export default function DiscountSection() {

  const [timer, setTimer] = useState({ hours: 9, minutes: 20, seconds: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Decrease one second from timer
      if (timer.seconds > 0) {
        setTimer({ ...timer, seconds: timer.seconds - 1 });
      } else {
        if (timer.minutes > 0) {
          setTimer({ ...timer, minutes: timer.minutes - 1, seconds: 59 });
        } else {
          if (timer.hours > 0) {
            setTimer({ ...timer, hours: timer.hours - 1, minutes: 59, seconds: 59 });
          } else {
            // Timer reaches 0, do something if needed
            clearInterval(intervalId);
          }
        }
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [timer]);

  // Format the timer
  const formattedTimer = `${timer.hours < 10 ? '0' + timer.hours : timer.hours}: ${timer.minutes < 10 ? '0' + timer.minutes : timer.minutes}: ${timer.seconds < 10 ? '0' + timer.seconds : timer.seconds}`;


  return (
    <div className='discount-section p-5' id='discount'>
      <div className="row g-5">
        <div className="col col-7">
          <div className="discount-content d-flex flex-column justify-content-evenly h-100">
            <p className='h1 text-white fw-bold'>80% discount on all products for the this year</p>
            <p className='h1 text-white'>{formattedTimer}</p>
          </div>
        </div>
        <div className="col">
          <div className="discount-image-container">
            <img src={discountImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
