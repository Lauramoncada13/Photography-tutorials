import React, { useState } from 'react';

function Filter({ onFilterChange }) {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const applyFilters = () => {
    onFilterChange({ category, difficulty });
  };

  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Todas las categorías</option>
        <option value="básico">Básico</option>
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>
      </select>
      <select value={difficulty} onChange={handleDifficultyChange}>
        <option value="">Toda la dificultad</option>
        <option value="fácil">Fácil</option>
        <option value="media">Media</option>
        <option value="difícil">Difícil</option>
      </select>
      <button onClick={applyFilters}>Aplicar Filtros</button>
    </div>
  );
}

export default Filter;
