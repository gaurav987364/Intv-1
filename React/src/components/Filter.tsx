import { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from JSONPlaceholder
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter suggestions based on query
    if (query.length > 0) {
      const filteredSuggestions = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query, data]);

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="bg-yellow-300">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Component</h1>
      <input
        type="text"
        placeholder="Type to search..."
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="border border-gray-300 rounded">
        {suggestions.map((item) => (
          <li key={item.id} className="p-2 border-b border-gray-200 hover:bg-gray-100">
            {highlightText(item.name, query)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
