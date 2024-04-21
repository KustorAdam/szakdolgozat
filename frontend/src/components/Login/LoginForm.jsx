import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import './LoginForm.css'


export default function LoginForm() {
  const [userid, setUserid] = useState(-1);
  const [username, setText] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(username, password);
    axios.post('http://127.0.0.1:4004/loginusers', { 
      username: username,
      password: password
     })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        try {
          const tokenParts = res.data.token.split('.');
          const payload = JSON.parse(atob(tokenParts[1]));

          setUserid(payload);
          console.log(payload);

          window.location.href = payload.role_id === 1 ? 'http://localhost:3000/home': "http://localhost:3000/adminpage" 

        } catch (error) {
          console.error('Error decoding token:', error);
        }
      })
      .catch(err => console.log(err));
    }


      return (
        <div className='container'>
        <form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Felhasználónév</Form.Label>
            <Form.Control type="text" value={username} required onChange={e => setText(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Jelszó</Form.Label>
            <Form.Control type="password" required onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group>
            <Button type="submit" variant="primary">Bejelentkezés</Button>
        </Form.Group>
    </form>
    </div>
  )
}
