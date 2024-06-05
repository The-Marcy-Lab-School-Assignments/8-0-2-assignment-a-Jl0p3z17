import { useState } from 'react'
import { handleFetch } from '../utils';

/* FEEDBACK: Remember to remove unused imports / values! */


/* FEEDBACK: Excellent job on this Jordy! This looks perfect */
function GifContainer({ gifs }) {
    return (
        <ul>
            {gifs?.map((gif =>
                <li key={gif.id}>
                    <img src={gif.images.fixed_height.url} alt={gif.title} />
                </li>
            ))}
        </ul>
    )
}

export default GifContainer
