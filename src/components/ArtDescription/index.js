import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ArtDescription ({ gallery }) {
    const galleryId = gallery.id;
    return (
        <Link to={`/galleries/${galleryId}`}>{`Back to Gallery ${gallery.name}`}</Link>
    );
}

export default ArtDescription;
