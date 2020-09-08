import React, {useState, useEffect} from 'react';
import {Button, FormControl, InputLabel, Input,FormHelperText} from '@material-ui/core';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import db from './firebase';
import Message from './Message';

import './App.css';

function App() {
  //useState -> piece of memoery which willget destroyed when the app is reloaded
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
   

  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshop => {
      setMessages(snapshop.docs.map(doc => {
        return {id: doc.id, data: doc.data()};
      }));
    });
    
  }, [])

  //useEffect -> executes a block of code when the component is loaded. Consider it as a lifecycle hook
  useEffect(() => {
    setUsername(prompt('Enter your username'));
  }, []) //everytime condition changes useEffect will fire

  const sendMessages = (event) => {
    event.preventDefault();
    db.collection('messages').add(
      {
        username, 
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    
    setInput('');
    
  }
  return (
    <div className="App">
      <h1>Hello I am Gihan 🚀 </h1>
      
    { username &&  <h2>Welcome {username}</h2>}
      
   
      <FormControl onSubmit={sendMessages}>
        <InputLabel >Chat message 🔥 </InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button color="primary" variant="contained" type="submit" onClick={sendMessages} disabled={!input}>Send Message</Button>
      </FormControl>




      <div className="message-container">
        <FlipMove>
        {
          messages.map(({id, data}) => <Message key={id} message={data} currentUser={username}/>)
        }
        </FlipMove>
      </div>
    </div>
    
  );
}

export default App;
