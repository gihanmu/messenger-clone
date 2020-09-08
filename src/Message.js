import React, {forwardRef} from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css'

const Message = forwardRef(({currentUser, message}, ref) => {
    const isLoggedIn = currentUser === message.username;
    debugger;
    return (
        <div ref={ref}>
           <Card className={`message ${isLoggedIn && 'current-user'}`}>
            <CardContent>
              <Typography 
                color="inherit"
                variant="h5"
                component="h2">
                {message.username} : {message.message }
              </Typography>
            </CardContent>
          </Card>
        </div>
    )
});

export default Message;
