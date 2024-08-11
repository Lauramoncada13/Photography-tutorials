import React from 'react';

function TutorialCard({ tutorial }) {
  return (
    <div className="tutorial-card">
      <h2>{tutorial.title}</h2>
      <p>{tutorial.description}</p>
      <p><strong>Categoría:</strong> {tutorial.category}</p>
      <p><strong>Dificultad:</strong> {tutorial.difficulty}</p>
    </div>
  );
}

export default TutorialCard;
