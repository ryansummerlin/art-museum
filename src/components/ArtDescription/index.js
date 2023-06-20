import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ArtDescription ({ gallery }) {
    const galleryId = gallery.id;
    const params = useParams();
    const { artId } = params;
    const art = gallery.objects.find(obj => obj.id == artId);
    console.log(art.images);
    return (
        <div className='art-description'>
            <Link to={`/galleries/${galleryId}`}>{`Back to Gallery ${gallery.name}`}</Link>
            <a href={art.url}>{art.title}</a>
            {art.images.map(img => (
                <img key={img.idsid} src={img.baseimageurl} alt={img.description}></img>
            ))}
            <h3>{`Description: ${art.description}`}</h3>
            <h3>{`Credit: ${art.creditline}`}</h3>
            <h3>{`Technique: ${art.technique}`}</h3>
        </div>
    );
}

export default ArtDescription;
