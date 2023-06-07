import '../styles/card-styles/card.css';
import React, { useEffect, useRef } from 'react';

const Cards = () => {
    const cardsRef = useRef();

    const handleOnMouseMove = (e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        target.style.setProperty('--mouse-x', `${ x }px`);
        target.style.setProperty('--mouse-y', `${ y }px`);
    }

    useEffect(() => {
        const cards = cardsRef.current.childNodes;
        cards.forEach(card => {
            card.onmousemove = e => handleOnMouseMove(e);
        });
    }, []);

    return (
        <div id='cards' ref={cardsRef}>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
        </div>
    )
}

export default Cards;
