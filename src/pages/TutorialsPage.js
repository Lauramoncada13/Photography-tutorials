import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import TutorialCard from '../components/TutorialCard';

// Simulación de datos de tutoriales
const tutorialsData = [
  { id: 1, title: 'Introducción a la Fotografía', description: 'Un tutorial para principiantes.', category: 'básico', difficulty: 'fácil' },
  { id: 2, title: 'Composición Fotográfica Avanzada', description: 'Aprende técnicas avanzadas de composición.', category: 'avanzado', difficulty: 'difícil' },
  // Agrega al menos 40 tutoriales aquí
];

function TutorialsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '', difficulty: '' });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredTutorials = tutorialsData
    .filter(tutorial => tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(tutorial => filters.category === '' || tutorial.category === filters.category)
    .filter(tutorial => filters.difficulty === '' || tutorial.difficulty === filters.difficulty);

  return (
    <div>
      <h1>Tutoriales de Fotografía</h1>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilterChange={handleFilterChange} />
      <div className="tutorials-list">
        {filteredTutorials.map(tutorial => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
}

export default TutorialsPage;
