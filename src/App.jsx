import Card from './Card.jsx';
import './index.css'; // For the card styles
import htmlPic from './assets/HTML.jpeg'; // Image for the first card
import cssPic from './assets/CSS.jpeg'; // Image for the second card
import jsPic from './assets/JavaScript.jpeg'; // Image for the third card

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      <Card
        image={htmlPic}
        title="HTML Course"
        text="Some of HTML courses ."
      />
      <Card
        image={cssPic}
        title="CSS Course"
        text="Some of CSS courses."
      />
      <Card
        image={jsPic}
        title="JavaScript Course"
        text="Some of JavaScript courses."
      />
    </div>
  );
}

export default App;
