import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/ui/Header';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);
      setItems(result.data);
      setLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={query => setQuery(query)} />
      <CharacterGrid items={items} loading={loading} />
    </div>
  );
}

export default App;
