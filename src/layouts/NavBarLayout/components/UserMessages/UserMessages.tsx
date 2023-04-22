import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Badge,
  Box,
  Popover,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import theme from "theme/theme";

const domiMessages = [
  {
    sender: "Lokmane",
    image: "https://i.pravatar.cc/300",
    message:
      "Hello, how are you ?Hello, how are you ?Hello, how are you ?Hello, how are you ?",
    date: "2021-10-10",
  },
  {
    sender: "Lokmane",
    image: "https://i.pravatar.cc/300",
    message: "Hello, how are you ?",
    date: "2021-10-10",
  },
  {
    sender: "Lokmane",
    image: "https://i.pravatar.cc/300",
    message: "Hello, how are you ?",
    date: "2021-10-10",
  },
  {
    sender: "Lokmane",
    image: "https://i.pravatar.cc/300",
    message: "Hello, how are you ?",
    date: "2022-10-10",
  },
];
const getAgo = (date: string) => {
  const now = new Date();
  const messageDate = new Date(date);
  const diff = now.getTime() - messageDate.getTime();

  const daysAgo = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursAgo = Math.floor(diff / 1000 / 60 / 60);
  const minutesAgo = Math.floor(diff / 1000 / 60);
  if (daysAgo > 0) return `${daysAgo} days ago`;
  if (hoursAgo > 0) return `${hoursAgo} hours ago`;
  return `${minutesAgo} min ago`;
};
const UserMessages = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Badge
        sx={{
          cursor: "pointer",
        }}
        onClick={handleClick}
        variant="dot"
        color="error"
      >
        <FontAwesomeIcon
          fontSize={"18px"}
          color={theme.palette.primary.dark}
          icon={faCommentDots}
        />
      </Badge>
      <Popover
        sx={{
          marginTop: "5px",

          "& .MuiPopover-paper": {
            padding: "5px",
            width: "250px",
            maxHeight: "400px",
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {domiMessages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: "15px",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: "45px", height: "45px" }}>
              <Image src={message.image} alt="" width={45} height={45} />
            </Avatar>
            <Box>
              <Typography
                sx={{
                  lineHeight: "16px",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {message.sender}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: theme.palette.grey[800],
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                }}
              >
                {message.message}
              </Typography>
              <Typography
                sx={{
                  fontSize: "11px",
                  lineHeight: "15px",
                  color: theme.palette.grey[800],
                }}
              >
                {getAgo(message.date)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Popover>
    </>
  );
};

export default UserMessages;
