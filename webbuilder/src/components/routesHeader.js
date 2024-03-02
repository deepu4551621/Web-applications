import React from 'react';
const separater =" > "
const Routesheader = ({ routes }) => {

  return (
    <div style={{display:'flex',padding:10,marginBottom:40 }}>
      {routes.map((route, index) => (
        <React.Fragment key={index}>
          <span>{route}</span>
          {index < routes.length - 1 && <span style={{marginRight:12, marginLeft:12, color:'grey'}}>{separater}</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Routesheader;
