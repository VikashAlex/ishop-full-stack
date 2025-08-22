// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="p-4 text-center bg-white shadow ">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Admin Dashboard. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
