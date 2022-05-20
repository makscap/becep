import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './ActivityHomePage.module.css';
import News from '../News/News';

const ActivityHomePage = () => {
  const [allArticles, setAllArticles] = useState(null);
  const [currentPage] = useState(1); // Pagination
  const [productsPerPage] = useState(4); // Pagination

  const TOPIC_NAME = 'Activity';

  useEffect(() => {
    fetch(`https://product-shop-api.herokuapp.com/product/`)
      .then(r => r.json())
      .then(setAllArticles)
      .catch(err => {
        console.log(err);
      });
  }, []);

  const lastProductIndex = currentPage * productsPerPage; // Pagination
  const firstProductIndex = lastProductIndex - productsPerPage; // Pagination
  const currentProduct = allArticles?.slice(firstProductIndex, lastProductIndex); // Pagination
  return (
    <div className="container">
      <div className={s.btn} style={{ marginTop: '10px' }}>
        <Link to="/vizia" className={s.btnLink}>
          COMPONENT FOR VIZIA PAGE
        </Link>
      </div>

      <h2 className={s.title}>{TOPIC_NAME}</h2>

      {allArticles && <News articles={currentProduct} topicName={TOPIC_NAME} />}
      <div className={s.btn}>
        <Link to="/actuality/activity/" className={s.btnLink}>
          Ďalšie aktuality
        </Link>
      </div>
    </div>
  );
};

export default ActivityHomePage;
