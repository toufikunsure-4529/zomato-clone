import { Button, TextField, Typography } from "@mui/material";

import React from "react";

function Dashboard() {
  return (
    <div>
      <Typography
        variant="h5"
        component={"h5"}
        // sx={{ color: "red", textAlign: "center", marginTop: "6px" }}
        className="text-center underline text-red-800 mt-2"
      >
        Admin Dashboard
      </Typography>
      <Button
        variant="contained"
        sx={{ margin: "20px 40%" }}
        onClick={() => alert("Still Working...")}
      >
        Admin Login
      </Button>
      <br />
      <br />
      <TextField type="text" label="Enter your name" variant="filled" />
      {/* 41 mins */}
    </div>
  );
}

export default Dashboard;
