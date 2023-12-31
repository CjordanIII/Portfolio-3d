import { Link } from "react-router-dom";


import { socialLinks } from "../constants";
const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2023 <strong>Clarence Jordan III</strong>. All rights reserved. Inspired by this <a href="https://www.youtube.com/watch?v=0fYi8SGA20k&t=7030s" target="_blank">Click here</a>
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
// 

export default Footer;
