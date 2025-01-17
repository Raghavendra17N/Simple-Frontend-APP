import React from "react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Welcome = () => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }} // Start below the screen
      animate={{ y: 0, opacity: 1 }}   // Animate to the final position
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 1,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "background.paper",
          color: "text.primary",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Welcome to Tax Calculation Made Easy
        </Typography>
        <Typography variant="body1">
          Your trusted tool for seamless tax management.
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default Welcome;
