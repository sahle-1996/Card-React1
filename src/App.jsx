import React from 'react';
import CardList from './CardList.jsx'; 
import './index.css'; 

// Data for the cards
const cardData = [
  {
    image: './src/assets/HTML.jpeg', 
    title: 'HTML Course',
    description: 'Some of the best HTML courses available.',
  },
  {
    image: './src/assets/CSS.jpeg', 
    title: 'CSS Course',
    description: 'Learn styling with CSS in these great courses.',
  },
  {
    image: './src/assets/JavaScript.jpeg', 
    title: 'JavaScript Course',
    description: 'Master JavaScript with these amazing tutorials.',
  },
];

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>My React Cards</h1>
      <CardList cards={cardData} /> 
    </div>
  );
}

export default App;
