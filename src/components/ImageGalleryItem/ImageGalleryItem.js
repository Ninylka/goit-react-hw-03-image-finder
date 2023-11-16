
import { Component } from 'react';
import { ReactModal } from 'components/Modal/Modal';
import { ImageGalleryItem, ImageGalleryItemImg } from './ImageGalleryItem.styled';


export class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = image => {
    this.setState({
      isModalOpen: true,
      largeImageURL: image.largeImageURL,
    });
  };
  
  
  closeModal = () =>{
    this.setState({
      isModalOpen: false,
        largeImageURL:'',
        
  });
  };
  

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL  } = this.props;

    return (
      <>
      <ImageGalleryItem onClick={this.openModal}>
    <ImageGalleryItemImg src={webformatURL} alt="Result search" />
        </ImageGalleryItem>
        {isModalOpen && (
          <ReactModal
          imageURL={largeImageURL}
            isModalOpen={isModalOpen}
            closeModal={this.closeModal}
        
          />
        )}
      </>

    
    );
  }
}

