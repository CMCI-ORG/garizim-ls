import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-8 border-t">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-600">
          © {currentYear} Garizim Language Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};