import Card from './Card.jsx';
import './index.css'; 
import htmlPic from './assets/HTML.jpeg'; 
import cssPic from './assets/CSS.jpeg';
import jsPic from './assets/JavaScript.jpeg';

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