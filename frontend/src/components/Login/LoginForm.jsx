import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import './LoginForm.css'


export default function LoginForm() {
  const [userid, setUserid] = useState(-1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    console.log(email, password);
    axios.post('http://localhost:4000/users', { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        try {
          const tokenParts = res.data.token.split('.');
          const payload = JSON.parse(atob(tokenParts[1]));

          setUserid(payload);
          console.log(payload);

          window.location.href = payload.roleid === 1 ? 'http://localhost:3000/home': "http://localhost:3000/adminpage" 

        } catch (error) {
          console.error('Error decoding token:', error);
        }
      })
      .catch(err => console.log(err));


      return (
        <div className='container'>
        <form className="form">
        <Form.Group className="mb-3">
            <Form.Label>Email cím</Form.Label>
            <Form.Control 
                type="email" 
                name="email"
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Jelszó</Form.Label>
            <Form.Control 
                type="password" 
                name="password"
            />
        </Form.Group>
        <Form.Group>
            <Button type="submit" variant="primary">Bejelentkezés</Button>
        </Form.Group>
    </form>
    </div>
  )
}

  
  
