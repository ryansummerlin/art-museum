import React from 'react';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { Route } from 'react-router-dom';
import harvardArt from './data/harvardArt';

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>
      <Route path={`/galleries/:galleryId`}>
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </div>
  );
}

export default App;
