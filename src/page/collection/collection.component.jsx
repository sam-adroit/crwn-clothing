import React from "react";


import { useSelector } from "react-redux";

import CollectionItem from "../../component/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { useParams } from "react-router-dom";


import './collection.styles.scss';


const CollectionPage = () => {
    
    const collection = useSelector(selectCollection(useParams().collectionId));
    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CollectionPage;