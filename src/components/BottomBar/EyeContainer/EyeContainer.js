import React, { useState, useEffect } from "react";
import { CaretUpFill } from "react-bootstrap-icons";

import './EyeContainer.css';

const EyeContainer = () => {
    const [scrolled, setScrolled] = useState(false);

    const backToTop = () => {
        if (scrolled) {
            window.scrollTo({ top: 0 });
        }
    };

    const eyeball = (e) => {
        var pupils = document.querySelectorAll(".pupil");

        // pupil movement
        let pupilStartPoint = -5;
        let pupilRange = 20 - 10; //20 height and width of eye and 10 is of pupil

        // x points
        let mouseXEndPoint = window.innerWidth;
        let currentXPosition = e.clientX;
        let fracX = currentXPosition / mouseXEndPoint;

        // y points
        let mouseYEndPoint = window.innerHeight;
        let currentYPosition = e.clientY;
        let fracY = currentYPosition / mouseYEndPoint;

        let pupilXCurrentPos = pupilStartPoint + fracX * pupilRange; // value between 0 and 10
        let pupilYCurrentPos = pupilStartPoint + fracY * pupilRange; // value between 0 and 10
        // console.log(pupilXCurrentPos);

        pupils.forEach((pupil) => {
            pupil.style.transform = "translate(" + pupilXCurrentPos + "px, " + pupilYCurrentPos + "px)";
        });

        // var eye = document.querySelectorAll(".eye");
        // eye.forEach((eye) => {
        //     let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        //     let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        //     let radian = Math.atan2(e.pageX - x, e.pageY - y);
        //     let rot = radian * (180 / Math.PI) * -1 + 270;
        //     eye.style.transform = "rotate(" + rot + "deg)";
        // });
    };
    const onScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", eyeball);
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("mousemove", eyeball);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div
            className={`eyeCont ${!scrolled && "default"}`}
            onClick={backToTop}
            style={{ opacity: `${scrolled ? 1 : 0}`}}
        >
            <div className="arrow">
                <CaretUpFill size={25} />
            </div>
            <div className="face">
                <div className="eyes">
                    <div className="eye">
                        <div className="pupil"></div>
                    </div>
                    <div className="eye">
                        <div className="pupil"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EyeContainer;
