import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          DS
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/in/dwipannita-sen-345234220/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/dwipannitasen">
            <img src="/github.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar
