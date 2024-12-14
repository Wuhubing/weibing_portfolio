import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  Button, 
  Typography, 
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const VALID_USERNAME = 'admin';
  const VALID_PASSWORD = '1919';

  const handleLogin = () => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/auth');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <Container maxWidth="sm">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3,
            backgroundColor: 'white',
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            align="center" 
            gutterBottom
            style={{ color: '#000' }}
          >
            Admin Login
          </Typography>

          {error && (
            <Alert severity="error" onClose={() => setError('')}>
              {error}
            </Alert>
          )}

          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button 
            variant="contained"
            size="large"
            fullWidth
            onClick={handleLogin}
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              padding: '12px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Login
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default Login; 