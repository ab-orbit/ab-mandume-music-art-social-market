/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Layout from './components/Layout';
import ExploreView from './components/ExploreView';
import MapView from './components/MapView';
import ArchiveView from './components/ArchiveView';
import GalleryView from './components/GalleryView';
import ProfileView from './components/ProfileView';
import { ViewType } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('explore');

  const renderView = () => {
    switch (activeView) {
      case 'explore':
        return <ExploreView />;
      case 'map':
        return <MapView />;
      case 'archive':
        return <ArchiveView />;
      case 'gallery':
        return <GalleryView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <ExploreView />;
    }
  };

  return (
    <Layout activeView={activeView} onViewChange={setActiveView}>
      {renderView()}
    </Layout>
  );
}
