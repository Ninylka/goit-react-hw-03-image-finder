

import { GalleryItem} from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";


export const GalleryList = ({ items }) => {
   
    return (
        <ImageGalleryList>
            {items.map(item => (
                <GalleryItem key={item.id} item={item} 
                webformatURL={item.webformatURL}
                largeImageURL={item.largeImageURL}
               />
            ))}
        </ImageGalleryList>
    )
};

