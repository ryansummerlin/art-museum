import React from 'react';
import { useParams } from 'react-router-dom';

function GalleryView ({ galleries }) {
    const { galleryId } = useParams();
    const gallery = galleries.find(gallery => gallery.id == galleryId);
    return (
        <h2>{gallery.name}</h2>
    );
}

export default GalleryView;
