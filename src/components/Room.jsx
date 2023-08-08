import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import './Room.css'

export default function Room() {
    const navigate= useNavigate();
    const [roomId,SetRoomId]=useState('');
  
    function handleClick()
  {
       navigate(`/?roomID=${roomId}`);
  }

  return (
    <form className='join-room-form' onSubmit={handleClick}>
       <h1>Join a Room</h1>
        <label htmlFor="roomId"> Room Id  : </label>
        <input 
         type='text'
         id="roomId"
        value={roomId}
        onChange={(e) => SetRoomId(e.target.value)}
        />
        <button type='submit'>Join</button>
    </form>
  )
}

