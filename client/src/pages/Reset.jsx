import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear(); 
    alert('All data has been reset!'); 
    navigate('/'); 
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Resetting Data...</h2>
    </div>
  );
};

export default Reset;
