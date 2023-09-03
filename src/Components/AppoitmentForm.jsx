import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const AppoitmentForm = ({ Doctor, CloseTheForm }) => {
  const now = dayjs();
  const [value, setValue] = useState(now);
  const [Reason, setReason] = useState("");

  //   console.log(value);
  return (
    <div className="fixed top-0 right-0 bg-[#6cae75] w-full h-screen flex justify-center items-center flex-col z-50 ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
            height: "88%",
            bgcolor: "#ababe8",
          }}
        >
          <Button
            onClick={CloseTheForm}
            sx={{
              display: "flex",
              alignContent: "flex-end",
              position: "absolute",
              top: "43px",
              alignSelf: "flex-end",
            }}
          >
            <CloseIcon fontSize="large" color="primary" />
          </Button>
          <DateTimePicker
            value={value}
            label="Select a date and time"
            onChange={(newValue) => setValue(newValue)}
            sx={{ my: 4, borderRadius: "20px", borderBottom: 1 }}
            minDateTime={now}
          />
          <TextField
            id="Reason"
            label="Reason why you want to meet the doctor"
            multiline
            isRequired={true}
            inputProps={{ maxLength: 100 }}
            rows={4}
            value={Reason}
            onChange={(e) => setReason(e.target.value)}
            sx={{
              my: 4,
              width: "70%",
              borderBottom: 1,
              borderColor: "text.primary",
              borderRadius: "16px",
            }}

            // placeholder="Write your reason here"
          />
          <Button variant="contained">Submit</Button>
        </Container>
      </LocalizationProvider>
    </div>
  );
};

export default AppoitmentForm;
