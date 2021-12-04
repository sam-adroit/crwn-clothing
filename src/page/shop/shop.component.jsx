import React from "react";
// import { RouteMatch, Route, Routes } from "react-router";

// import CollectionPage from '../collection/collection.component';
import CollectionsOverview from "../../component/collections-overview/collections-overview.component";


const ShopPage = () => (
  <div className='shop-page'>
    <CollectionsOverview />
    {/* <Route path="/:collectionId" element={<CollectionPage />} /> */}
    
  </div>
);

export default ShopPage;