import { useState } from "react";


function GifSearch({ searchGif }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchGif(searchTerm);
    };

    /* FEEDBACK: Typo! setSearchTerm */

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div style={{ color: 'white' }}>
                <label htmlFor="searchInput">Enter a Search Term </label>
                <input type="text" className="form-control" id="searchInput" value={searchTerm} onChange={handleChange} />
                <button type="submit" className="btn btn-success">Search</button>
            </div>
        </form>
    )
}

export default GifSearch



