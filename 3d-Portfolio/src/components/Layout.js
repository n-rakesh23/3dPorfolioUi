// src/components/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Navbar will go here later */}
      {children}
      {/* Footer will go here later */}
    </div>
  );
};

export default Layout;