import React from 'react';

const InfoItem = ({ children, ...props }) => {
  return (
    <div style={{ textAlign: 'center', width: '100%', ...props }}>
      {children}
    </div>
  );
};

export default InfoItem;
