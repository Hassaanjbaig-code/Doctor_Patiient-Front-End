import React from "react";
import Button from "@mui/material/Button";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Topnavbar = ({ Responsive, CloseResponsive }) => {
  return (
    <nav className="w-full h-14 bg-blue-400 rounded-md flex justify-between items-center">
      <div className="md:invisible">
        <Button sx={{ padding: 1 }} onClick={Responsive}>
          {CloseResponsive ? (
            <MenuBookTwoToneIcon fontSize="small" />
          ) : (
            <MenuBookRoundedIcon fontSize="small" />
          )}
        </Button>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Avatar {...stringAvatar("Dan Abrahmov")} />
        </Stack>
      </div>
    </nav>
  );
};

export default Topnavbar;
