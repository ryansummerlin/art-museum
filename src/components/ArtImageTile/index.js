import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ArtImageTile ({ art }) {
    const { galleryId } = useParams();
    const artId = art.id;
    return (
        <Link to={`/galleries/${galleryId}/art/${artId}`}>
            <img src={art.images[0].baseimageurl} alt={art.images[0].description}></img>
        </Link>
    );
}

export default ArtImageTile;
