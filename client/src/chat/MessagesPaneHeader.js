import React from "react";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { toggleMessagesPane } from "./utils";

export default function MessagesPaneHeader(props) {
  const { sender } = props;
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.body"
      }}
      py={{ xs: 2, md: 2 }}
      px={{ xs: 1, md: 2 }}
    >
      <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{
            display: { xs: "inline-flex", sm: "none" }
          }}
          onClick={() => toggleMessagesPane()}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
       
        <div>
          <Typography fontWeight="lg" fontSize="lg" component="h2" noWrap>
           Global Chat
          </Typography>
          
        </div>
      </Stack>
    </Stack>
  );
}
