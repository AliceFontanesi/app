import React, { useState, useEffect } from 'react';

function Articoli() {
  const [count, setCount] = useState(0);
  const [postData, setPostData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); //stato per tenere traccia id articolo selezionato

  useEffect(() => {
    fetch('https://www.blog.escalibur.eu/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(error => console.error('Errore nella richiesta:', error));
  }, []);

  //gestione id clic box
  const handlePostClick = postId => {
    setSelectedPost(postId); //imposta id articolo selezionato
  };

  // Funzione per tornare alla lista dei post
  const handleBackToList = () => {
    setSelectedPost(null); //resetta id articolo selezionato per tornare alla lista dei post
  };

  //visualizzazione post selezionato
  if (selectedPost) {
    const selectedPostData = postData.find(post => post.id === selectedPost);
    return (
      <>
        <button onClick={handleBackToList}>Back to List</button>
        <h1>{selectedPostData.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: selectedPostData.content.rendered }} />
      </>
    );
  }

  //lista dei post
  return (
    <>
      <h1>Escalibur</h1>
      <div>
        <h2>Ultimi articoli:</h2>
        <div className="post-container">
          {postData.map(post => (
            <div key={post.id} onClick={() => handlePostClick(post.id)} className="post-box">
              <p>{post.title.rendered}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Articoli;
