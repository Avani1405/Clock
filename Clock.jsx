import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from './store/clockSlice';
import './App.css';

const Clock = () => {
  const dispatch = useDispatch();
  const time = useSelector(state => state.clock.time);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [dispatch]);

  return (
    <div>
      <h2>🕒 Current Time:</h2>
      <p style={{ fontSize: '2rem' }}>{time}</p>
    </div>
  );
};

export default Clock;
