import Card from './Card.jsx';

function CardList({ cards }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      {cards.map((card, index) => (
        <Card
          key={index} 
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default CardList;
