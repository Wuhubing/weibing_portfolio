import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import '../../styles/Map.css';

const Map: React.FC = () => {
  useEffect(() => {
    const existingScript = document.getElementById('clstr_globe');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'clstr_globe';
    script.src = '//clustrmaps.com/globe.js?d=mGThQdv4BwtkvQlgV2ZRAODFFPEjTAgMSd0rquONgtQ&w=250';
    script.async = true;

    document.getElementById('map-container')?.appendChild(script);

    return () => {
      const script = document.getElementById('clstr_globe');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <section className='section map' id='map'>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h1" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Visitor Map
        </Typography>
        <div 
          id="map-container" 
          style={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
            margin: '20px 0'
          }}
        />
      </Container>
    </section>
  );
}

export default Map;