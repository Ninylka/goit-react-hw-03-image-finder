
import { Searchbar } from './Searchbar/Searchbar';
import { ThreeDots } from  'react-loader-spinner';
import { Component } from 'react';
import { fetchSearch } from './api';
import { GalleryList } from './ImageGallery/ImageGallery';
import { ButtonLoad } from './Button/Button';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = { 
    images: [],
    query: "",
    page: 1,
    error: false,
    largeImageURL: "",
    isModalOpen: false,
    isLoading: false,
    loadMore: false,
    
    
  } 

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  handleFormSubmit = newQuery => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };




  fetchImages = async () => {
    const { query, page } = this.state;

    try {
      this.setState({
        isLoading: true,
        error: false,
      });
      const imageData = await fetchSearch({ query, page });

      if (imageData !== null) {

        this.setState(prevState => ({
          images: [...prevState.images, ...imageData.hits],
          loadMore: page < Math.ceil(imageData.totalHits /12),
        }));
      }

    } catch (error) {
      this.setState({ error: true });
      toast.error('Oops! We encountered an issue. Please try refreshing the page!');

    } finally {
      this.setState({ isLoading: false });
    }
  };


 
  render(){ 
  
    const {  images, isLoading, loadMore } = this.state;
    

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#303f9f" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}/>}
       <GalleryList items={images} />
        {images.length > 0 && loadMore && (<ButtonLoad onClick={this.handleLoadMore} />)}
        <Toaster/>
      </>
    );
  
  }
}