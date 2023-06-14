import React from 'react';
import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';

function GalleryView ({ galleries }) {
    const { galleryId } = useParams();
    const gallery = galleries.find(gallery => gallery.id == galleryId);
    return (
        <div>
            <h2>{gallery.name}</h2>
            {gallery.objects.map(artwork => (
                <ArtImageTile art={artwork}></ArtImageTile>
            ))}
        </div>

    );
}

export default GalleryView;
