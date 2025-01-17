import React from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const Register = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "30px",
        maxWidth: "400px",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField label="Name" fullWidth required />
        <TextField label="Email" type="email" fullWidth required />
        <TextField label="Password" type="password" fullWidth required />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </Box>
    </Paper>
  );
};

export default Register;
