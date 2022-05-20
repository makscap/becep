import React, { useState, useEffect, useCallback } from 'react';
import s from './Gallery.module.css';

const images = [
  'https://vjoy.cc/wp-content/uploads/2019/09/oboik.ru_12282.jpg',
  'https://media.istockphoto.com/photos/beautiful-eiffel-tower-vertical-photo-picture-id696912118?s=612x612',
  'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?fit=bounds&format=jpg&width=960',
  'https://fotky.sme.sk/foto/393529/abstrakt?type=v&x=650&y=433',
  'https://fotky.sme.sk/foto/234886/farebne-linie?type=v&x=650&y=487',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSL9vaAUhZsdykvy7W0vPAIg4c1F_Onrhqe2-5oCzlAww7zbzfhMgZXichU18jiAxLO40&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1E401GJsPpo1-kCyaO7Uil9aacXYkShCMEA&usqp=CAU',
  'https://fotky.sme.sk/foto/393529/abstrakt?type=v&x=650&y=433',
];

const Gallery = ({ article }) => {
  const [currentPageWithPhotos, setCurrentPageWithPhotos] = useState(0);
  const [photosPerPage, setPhotosPerPage] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [position, setPosition] = useState(0);

  let lenghtImg = images.length;

  const escFunction = useCallback(event => {
    if (event.keyCode === 27) {
      closeModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction);

    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);

  const currentProduct = images.slice(currentPageWithPhotos, photosPerPage);
  const paginate = pageNumber => setCurrentPageWithPhotos(pageNumber);

  const lastPhoto = photos => {
    if (photos >= 1) {
      setPhotosPerPage(() => photosPerPage - 1);
      setCurrentPageWithPhotos(() => currentPageWithPhotos - 1);
    }
    return photos;
  };

  const nextPhoto = photos => {
    if (photos + 3 < images.length) {
      setPhotosPerPage(() => photosPerPage + 1);
      setCurrentPageWithPhotos(() => currentPageWithPhotos + 1);
    }
    return photos;
  };

  function openModal(e) {
    setShowModal(!showModal);
  }

  function closeModal(e) {
    setShowModal(false);
  }

  function onCloseModalOnOverlay(event) {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  }

  const showHideClassName = showModal ? s.overlay : s.closeModal;

  const goToPrevImg = e => {
    if (position >= 1) {
      setPosition(position - 1);
    }
  };

  const goToNextImg = e => {
    if (position + 1 < lenghtImg) {
      setPosition(position + 1);
    }
  };

  const getPositionInArray = url => {
    setPosition(images.indexOf(url));
  };

  return (
    <>
      <div className={s.galeriaBackground}>
        <div className="container">
          <div className={s.galeria}>
            <h4 className={s.galeriaLabel}>Fotogaléria</h4>

            <div className={s.photoGroup}>
              {currentProduct.map((e, i) => (
                <img
                  key={i}
                  src={e}
                  alt={e}
                  width="300px"
                  height="187px"
                  className={s.photo}
                  onClick={e => {
                    setPosition(i);
                    openModal();
                    getPositionInArray(e.target.src);
                  }}
                />
              ))}
            </div>
            <button
              className={s.btnLeft}
              onClick={e => {
                e.preventDefault();
                paginate(lastPhoto);
              }}
            >
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.69498 0.744198C6.40915 0.458365 5.94832 0.458365 5.66248 0.744198L0.814984 5.5917C0.587484 5.8192 0.587484 6.1867 0.814984 6.4142L5.66249 11.2617C5.94832 11.5475 6.40915 11.5475 6.69499 11.2617C6.98082 10.9759 6.98082 10.515 6.69499 10.2292L2.47165 6.00003L6.70082 1.77086C6.98082 1.49086 6.98082 1.0242 6.69498 0.744198Z"
                  fill="#626A6E"
                />
              </svg>
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                paginate(nextPhoto);
              }}
              className={s.btnRight}
            >
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.306235 11.2558C0.592069 11.5416 1.0529 11.5416 1.33874 11.2558L6.18624 6.4083C6.41374 6.1808 6.41374 5.8133 6.18624 5.5858L1.33874 0.738301C1.0529 0.452467 0.592069 0.452467 0.306235 0.738301C0.020402 1.02413 0.020402 1.48497 0.306235 1.7708L4.52957 5.99997L0.300402 10.2291C0.0204019 10.5091 0.020402 10.9758 0.306235 11.2558Z"
                  fill="#626A6E"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* MODAL */}
        <div className={showHideClassName} onClick={onCloseModalOnOverlay}>
          <section className={s.modal}>
            <div className={s.photoInModal}>
              <img src={images[position]} alt={images[position]} className={s.photoBox}></img>
            </div>
            <button className={s.prevBtn} onClick={goToPrevImg}>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.69498 0.744198C6.40915 0.458365 5.94832 0.458365 5.66248 0.744198L0.814984 5.5917C0.587484 5.8192 0.587484 6.1867 0.814984 6.4142L5.66249 11.2617C5.94832 11.5475 6.40915 11.5475 6.69499 11.2617C6.98082 10.9759 6.98082 10.515 6.69499 10.2292L2.47165 6.00003L6.70082 1.77086C6.98082 1.49086 6.98082 1.0242 6.69498 0.744198Z"
                  fill="#626A6E"
                />
              </svg>
            </button>
            <button className={s.nextBtn} onClick={goToNextImg}>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.306235 11.2558C0.592069 11.5416 1.0529 11.5416 1.33874 11.2558L6.18624 6.4083C6.41374 6.1808 6.41374 5.8133 6.18624 5.5858L1.33874 0.738301C1.0529 0.452467 0.592069 0.452467 0.306235 0.738301C0.020402 1.02413 0.020402 1.48497 0.306235 1.7708L4.52957 5.99997L0.300402 10.2291C0.0204019 10.5091 0.020402 10.9758 0.306235 11.2558Z"
                  fill="#626A6E"
                />
              </svg>
            </button>
            <button type="button" className={s.closeBtn} onClick={closeModal}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3 0.710215C12.91 0.320215 12.28 0.320215 11.89 0.710215L7 5.59022L2.11 0.700215C1.72 0.310215 1.09 0.310215 0.700001 0.700215C0.310001 1.09021 0.310001 1.72022 0.700001 2.11022L5.59 7.00022L0.700001 11.8902C0.310001 12.2802 0.310001 12.9102 0.700001 13.3002C1.09 13.6902 1.72 13.6902 2.11 13.3002L7 8.41021L11.89 13.3002C12.28 13.6902 12.91 13.6902 13.3 13.3002C13.69 12.9102 13.69 12.2802 13.3 11.8902L8.41 7.00022L13.3 2.11022C13.68 1.73022 13.68 1.09022 13.3 0.710215Z"
                  fill="#626A6E"
                />
              </svg>
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Gallery;
