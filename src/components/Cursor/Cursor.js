import React, { useEffect } from 'react';

import "./Cursor.css";

const Cursor = () => {
    const coords = {x: 0, y: 0};

    // const colors = ["#AA367C", "rgb(74, 47, 189)", "#4A2FBD", "rgb(147, 88, 215)", "#536DFE" ]

    useEffect(() => {
        var circles = document.querySelectorAll(".circle");
        circles.forEach(function(circle) {
            circle.x = 0;
            circle.y = 0;
            
            // circle.style.backgroundColor = colors[index % colors.length];
        });
    }, [])
    

    const animateCircles = () => {
        var circles = document.querySelectorAll(".circle");
        let x = coords.x;
        let y = coords.y;
        // console.log(circles);

        circles.forEach(function(circle, index) {
            // half of height and widht is 16/2 = 8
            circle.style.left = x - 8 + "px";
            circle.style.top = y - 8 + "px";

            circle.style.scale = (circles.length - index) / circles.length;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.5;
            y += (nextCircle.y - y) * 0.5;
        });
        requestAnimationFrame(animateCircles);
    }
    animateCircles();

    const cursorMove = (e) => {
        coords.x = e.pageX;
        coords.y = e.pageY;

        // console.log(coords);
    }

    useEffect(() => {
        window.addEventListener("mousemove", cursorMove);

        return () => window.removeEventListener("mousemove", cursorMove);
    }, []);

    return (
        <div className="cursor">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    )
}

export default Cursor;