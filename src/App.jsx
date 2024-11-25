import htmlImage from './assets/HTML.jpeg';
import cssImage from './assets/CSS.jpeg';
import jsImage from './assets/JavaScript.jpeg';
import CardList from './CardList.jsx';

// Data for the cards
const cardData = [
  {
    image: htmlImage, 
    title: 'HTML Course',
    description: 'Some of the best HTML courses available.',
  },
  {
    image: cssImage, 
    title: 'CSS Course',
    description: 'Learn styling with CSS in these great courses.',
  },
  {
    image: jsImage, 
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
