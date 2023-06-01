import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./ResetPassword.module.css";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function ResetPasword() {
  return (
    <div>
      <div
        className={`${styles.flx} ${styles.justifyCenter}`}
        style={{ borderBottom: "1px", boxShadow: "0 .8px #aaa" }}
      >
        <div
          className={`${styles.flx} ${styles.justifyBetween}`}
          style={{ width: "590px" }}
        >
          <div className={`${styles.flx} ${styles.alignCenter}`}>
          
            
          </div>
          <Select
            // value={age}
            // onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>English</em>
            </MenuItem>
            <MenuItem value={10}>Hindi</MenuItem>
            <MenuItem value={20}>French</MenuItem>
            <MenuItem value={30}>italiano</MenuItem>
          </Select>
        </div>
      </div>
      <div className={`${styles.flx} ${styles.justifyCenter}`}>
        <div style={{ width: "590px" }}>
          <h1>Find Your Twitter account</h1>
          <p>Enter your email, phone number, or Username</p>
          <div style={{ marginBottom: "1.5rem" }}>
            <FormControl sx={{ width: "38ch" }}>
              <OutlinedInput
                sx={{
                  borderRadius: 20,
                }}
                placeholder=""
              />
            </FormControl>
          </div>
          <div>
            <Button sx={{ borderRadius: 20 }} variant="contained">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
