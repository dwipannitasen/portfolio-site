import { motion } from "framer-motion";

const toggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="20" height="25" viewBox="0 0 25 12">
        <motion.path
          d="M2 2C15.3333 2 21.5556 2 23 2"
          stroke="#171623"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            closed: { d: "M2 2C15.3333 2 21.5556 2 23 2" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          d="M2 8C15.3333 8 21.5556 8 23 8"
          stroke="#171623"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          d="M2 14C15.3333 14 21.5556 14 23 14"
          stroke="#171623"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            closed: { d: "M2 14C15.3333 14 21.5556 14 23 14" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

export default toggleButton;