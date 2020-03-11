import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, getTotal, getPositivePercentage }) =>{
    return (
        <>
        <p>Good: {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {getTotal()} </p>
        <p>Positive feedback: {getPositivePercentage()}%</p>
        </>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    getTotal: PropTypes.func.isRequired,
    getPositivePercentage: PropTypes.func.isRequired

}

export default Statistics;
