import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HttfLogo from "../content/logo/HttfLogo.svg";

function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="intro"
      style={{
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <motion.img
        src={HttfLogo}
        alt="Logo"
        style={{ width: 350, height: 350 }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}

export default Intro;