import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../../styles/Map.css';

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//rf.revolvermaps.com/0/0/8.js?i=5nblcode3oo&m=6&c=ff0000&cr1=ffffff&f=ubuntu&l=33&s=300";
    script.async = true;
    document.getElementById('map-container').appendChild(script);
  }, []);

  return (
    <section className='section map center' id='map'>
      <Container className="map_info">
        <h1 className="project-heading" style={{ textAlign: 'center' }}>
          Visitor Map
        </h1>
        <Row className="info_item" style={{ justifyContent: 'center' }}>
          <div id="map-container" style={{ width: '100%', height: '500px' }}></div>
        </Row>
      </Container>
    </section>
  );
}

export default Map;