import './App.css';
import booksImage from './books-removebg-preview.png'; // Import the image
import Resources from './components/Resources';

const App = () => {

  return (
    <div className="App">
      <img src={booksImage} alt="Books" id='book' /> {/* Use the imported image */}
      <h1>CS Studying Resources</h1>
      <Resources />

    </div>
  )
}

export default App
