import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchBeers = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
    );
    const data = await response.json();
    setBeers((prevBeers) => [...prevBeers, ...data]);
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto py-20 bg-white">
                <h3 className='text-center py-6 font-semibold text-4xl font-serif'>LIST OF BEERS</h3>
                <div className="grid grid-cols-3 gap-4">
                    {beers.map((beer) => (
                        <div key={beer.id} className="bg-white p-4 shadow-md">
                            <h3 className="text-lg font-semibold">{beer.name}</h3>
                            <p>{beer.tagline}</p>
                        </div>
                    ))}
                </div>
                {loading && <p><span className="loading loading-spinner loading-md"></span></p>}
            </div>
        </div>
    );
};

export default Beers;