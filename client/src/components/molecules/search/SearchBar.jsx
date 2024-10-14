import React, { useState, useEffect } from 'react';
import { veterinarianGet } from '../../services/veterinarianServices';
import Search from '../../atoms/search/Search';
import CardVeterinarians from '../card/CardVeterinarians';
import GoogleMap from '../map/GoogleMap';
import './searchBar.css';


const SearchBar = ({ className }) => {
    const [search, setSearch] = useState('');
    const [veterinarian, setVeterinarian] = useState([]);
    const [filterVet, setFilterVet] = useState([])
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSearch = (e) => {
        e.preventDefault();
        const result = veterinarian.filter((vet) =>
            vet.lieux.toLowerCase().includes(search.toLowerCase()) ||
            vet.nom.toLowerCase().includes(search.toLowerCase())
        );

        setFilterVet(result);
    }

    useEffect(() => {
        const fechtVet = async () => {
            try {
                const data = await veterinarianGet();
                setVeterinarian(data);
                setFilterVet(data);
            } catch {
                (error) => {
                    setErrorMessage(error.data.description);
                }

            } finally {
                setLoading(false);
            }
        }
        fechtVet();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    if (errorMessage) {
        return <div>Error al cargar el perfil: {errorMessage}</div>;
    }

    return (
        <div className="searchBar-content">
            <div className={`searchBar-block ${className}`}>
                <Search search={search} onChange={(e) => setSearch(e.target.value)} handleSearch={handleSearch} />
            </div>
            <div className={`searchBar-block ${className}`}>
                <CardVeterinarians veterinarians={filterVet.length > 0 ? filterVet : veterinarian} />
                <GoogleMap veterinarians={filterVet.length > 0 ? filterVet : veterinarian} />
            </div>
        </div>
    );
};
export default SearchBar;