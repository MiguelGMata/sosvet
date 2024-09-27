import React,{ useState, useEffect } from 'react';
import { veterinarianGet } from '../../services/useServices';
import './search.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const [veterinarian, setVeterinarian] = useState([]);
    const [filterVet, setFilterVet] = useState([])

    const handleSearch = (e) => {
        e.preventDefault();
        /*console.log('lieux  capturado en input->', {search)*/

        //busco coninsidencias filtrando
        const result = veterinarian.filter((vet) => 
            vet.lieux.toLowerCase().includes(search.toLowerCase()) ||
            vet.nom.toLowerCase().includes(search.toLowerCase())
        );
        // Actualizo los veterinarios filtrados
        setFilterVet(result);
       /* console.log(result)*/;
    }


    useEffect(() => {
        const fechtVet = async() =>{
            const data = await veterinarianGet();
            setVeterinarian(data);
            setFilterVet(data); // Mostrar todos inicialmente
        }
        fechtVet();
    },[]);

    return (
        <>
            <form className="search-bar" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Rechercher un véterinaire"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Rechercher</button>
            </form>
            {/* Mostrar los resultados filtrados */}
            <ul>
                {search === '' ? (
                    veterinarian.map((vet) => ( // Mostrar todos los veterinarios si no hay búsqueda
                        <li key={vet.id}>
                            {vet.nom} - {vet.lieux}
                        </li>
                    ))
                ) : (
                    filterVet.map((vet) => ( // Mostrar los veterinarios filtrados si se ha buscado
                        <li key={vet.id}>
                            {vet.nom} - {vet.lieux}
                        </li>
                    ))
                )}
            </ul>
        </>
    );
};
export default Search;