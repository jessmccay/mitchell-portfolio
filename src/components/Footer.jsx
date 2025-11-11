import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner py-4 text-center text-gray-600 text-sm">
      © {new Date().getFullYear()} Mitchell Art Portfolio. All rights reserved.
    </footer>
  );
}
