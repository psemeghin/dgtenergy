import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-sm text-gray-400 py-6 border-t border-gray-700 mt-10">
      <p>© {new Date().getFullYear()} DGTEnergy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
