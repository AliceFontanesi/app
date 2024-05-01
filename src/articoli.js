import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Articoli.css'; // Importa il file CSS per lo stile

function Articoli() {
  const [postData, setPostData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://www.blog.escalibur.eu/wp-json/wp/v2/posts');
      const data = await response.json();
      setPostData(data);
    } catch (error) {
      console.error('Errore nella richiesta:', error);
    }
  };

  const handlePostClick = postId => {
    setSelectedPost(postId);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    const selectedPostData = postData.find(post => post.id === selectedPost);
    return (
      <Container fluid className="container">
        <Button onClick={handleBackToList} className="back-btn">Torna alla lista</Button>
        <h1 className="post-title">{selectedPostData.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: selectedPostData.content.rendered }} />
      </Container>
    );
  }

  return (
    <Container fluid className="main-container">
      <Container className="title-container">
        <h1 className="main-title">Articoli Escalibur</h1>
      </Container>
      <Row xs={1} md={2} lg={3} className="post-row">
        {postData.map(post => (
          <Col key={post.id} className="post-col" onClick={() => handlePostClick(post.id)}>
            <div className="post-box">
              <p className="post-text">{post.title.rendered}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Articoli;
