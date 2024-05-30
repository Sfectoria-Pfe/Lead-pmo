import React, { useState } from 'react';
import Sheet from '@mui/joy/Sheet';

import MessagesPane from './MessagePanes';



import { chats } from './data';

const MyMessages = () => {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  return (
    <Sheet
      sx={{
        flex: 1,
        width: '100%',
        mx: 'auto',
      }}
    >
   
      <MessagesPane chat={selectedChat} />
    </Sheet>
  );
};

export default MyMessages;
