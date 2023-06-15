import React from 'react';
import { useParams, Switch, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';

function GalleryView ({ galleries }) {
    const { galleryId } = useParams();
    const gallery = galleries.find(gallery => gallery.id == galleryId);
    return (
        <div>
            <Switch>
                <Route exact path={`/galleries/:galleryId`}>
                    <h2>{gallery.name}</h2>
                    {gallery.objects.map(artwork => (
                        <ArtImageTile art={artwork} key={artwork.id}></ArtImageTile>
                    ))}
                </Route>
            </Switch>
        </div>

    );
}

export default GalleryView;
