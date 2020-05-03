import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/Searchbar/SearchBar';
import { getImagesPXB } from './helpers/APIrequest/Pixabay';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem';
import Modal from './Components/Modal/Modal';
import Loader from './Components/Loader/Loader';
import Button from './Components/Button/Button';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [modalImg, setModalImg] = useState({});
  const [isLoader, setIsLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addSearchQuery = (search) => {
    setPage(1);
    setSearchQuery(search);
  };

  const getImages = async () => {
    setIsLoader(true);
    try {
        await getImagesPXB(searchQuery, page)
        .then(res => {
          if(page === 1){
            setImages(res.data.hits);
          } else {
            setImages(images.concat(res.data.hits));
          }
        });
    } catch (err) {

    } finally {
      setIsLoader(false);
    }
  };

  const getModalImage = (id) => {
    const img = images.find(element => element.id === id);
    setModalImg(img);
  };

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
    setModalImg({});
  };

  const addNextPageImages = () => {
    setPage(page + 1);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    getImages();
  }, [searchQuery, page])

  return (<>
    <SearchBar addSearchQuery={addSearchQuery}/>
    <ImageGallery>
      {isLoader ? 
      <Loader/> :
      images.map((img) => (
        <ImageGalleryItem key={img.id} images={img} getModalImage={getModalImage} openModal={openModal}/>
      ))
      }
    </ImageGallery>
    {!!images.length && !isLoader && <Button addNextPageImages={addNextPageImages}/>}
    {isModal && <Modal modalImg={modalImg} closeModal={closeModal}/>}
    </>
  );
}

export default App;
