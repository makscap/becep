import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import s from '../ArticleDetailsView/ArticleDetailsView.module.css';
import Gallery from '../Gallery/Gallery';

const ArticleMenu = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://product-shop-api.herokuapp.com/product/${articleId}`)
      .then(r => r.json())
      .then(setArticle)
      .catch(err => {
        console.log(err);
      });
  }, [articleId]);

  return (
    <div>
      <div className="container">
        <ul className={s.linkList}>
          <li className={s.linkItem}>
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.66673 11.1666V7.83331H8.3334V11.1666C8.3334 11.5333 8.6334 11.8333 9.00007 11.8333H11.0001C11.3667 11.8333 11.6667 11.5333 11.6667 11.1666V6.49998H12.8001C13.1067 6.49998 13.2534 6.11998 13.0201 5.91998L7.44673 0.89998C7.1934 0.673314 6.80673 0.673314 6.5534 0.89998L0.980065 5.91998C0.753399 6.11998 0.893399 6.49998 1.20007 6.49998H2.3334V11.1666C2.3334 11.5333 2.6334 11.8333 3.00007 11.8333H5.00007C5.36673 11.8333 5.66673 11.5333 5.66673 11.1666Z"
                fill="#0B0C0C"
              />
            </svg>
          </li>
          <li className={s.linkItem}>
            <Link to="/" className={s.linkUrl}>
              Home
            </Link>
          </li>

          <li className={s.linkItem}>
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.919912 12.5067C1.24658 12.8334 1.77325 12.8334 2.09991 12.5067L7.63991 6.9667C7.89991 6.7067 7.89991 6.2867 7.63991 6.0267L2.09991 0.486699C1.77325 0.160033 1.24658 0.160033 0.919912 0.486699C0.593245 0.813366 0.593245 1.34003 0.919912 1.6667L5.74658 6.50003L0.913245 11.3334C0.593245 11.6534 0.593245 12.1867 0.919912 12.5067Z"
                fill="#0B0C0C"
              />
            </svg>
          </li>

          <li className={s.linkItem}>
            <Link to="/actuality/" className={s.linkUrl}>
              Actuality
            </Link>
          </li>

          <li className={s.linkItem}>
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.919912 12.5067C1.24658 12.8334 1.77325 12.8334 2.09991 12.5067L7.63991 6.9667C7.89991 6.7067 7.89991 6.2867 7.63991 6.0267L2.09991 0.486699C1.77325 0.160033 1.24658 0.160033 0.919912 0.486699C0.593245 0.813366 0.593245 1.34003 0.919912 1.6667L5.74658 6.50003L0.913245 11.3334C0.593245 11.6534 0.593245 12.1867 0.919912 12.5067Z"
                fill="#0B0C0C"
              />
            </svg>
          </li>

          <li className={s.linkItem}>
            <Link to="/actuality/activity/" className={s.linkUrl}>
              Activity
            </Link>
          </li>

          <li className={s.linkItem}>
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.919912 12.5067C1.24658 12.8334 1.77325 12.8334 2.09991 12.5067L7.63991 6.9667C7.89991 6.7067 7.89991 6.2867 7.63991 6.0267L2.09991 0.486699C1.77325 0.160033 1.24658 0.160033 0.919912 0.486699C0.593245 0.813366 0.593245 1.34003 0.919912 1.6667L5.74658 6.50003L0.913245 11.3334C0.593245 11.6534 0.593245 12.1867 0.919912 12.5067Z"
                fill="#0B0C0C"
              />
            </svg>
          </li>
          {article && (
            <li className={s.linkItem}>
              <p className={s.linkNameOfTopic}>{article.name}</p>
            </li>
          )}
        </ul>
      </div>
      {article && (
        <>
          <div className={s.infoBlock}>
            <div className="container">
              <h3 className={s.pageLabel}>Aktualita</h3>

              <h2 className={s.name}>{article.name}</h2>
              <p className={s.dateLabel}>{'Publikované: 11.10.2017'}</p>
              <div className={s.line}></div>
              <p className={s.text}>
                Deň 29.9.2017 bol venovaný Noci výskumníkov v mestách Bratislava, Žilina, Banská
                Bystrica, Poprad a Košice. Oddelenie BECEP v spolupráci s PRIBINA pripravilo pre
                záujemcovi "Iný pohľad na cestu" a rozdávali sa aj reflexné predmety ako aj iné
                vzdelávacie pomôcky pre bezpečný pohyb v cestnej premávke.
              </p>
            </div>

            {/* gallery */}
            <Gallery article={article} />
            {/* gallery */}

            <div className={s.linksPosition}>
              <div className="container">
                <div className={s.linksPosition}>
                  <div className={s.linksPosition}>
                    <p className={s.social}>Zdieľať tento článok:</p>
                    <p className={s.facebook}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6652 2.65667H12.1259V0.112667C11.8739 0.078 11.0072 0 9.99791 0C7.89191 0 6.44924 1.32467 6.44924 3.75933V6H4.12524V8.844H6.44924V16H9.29858V8.84467H11.5286L11.8826 6.00067H9.29791V4.04133C9.29858 3.21933 9.51991 2.65667 10.6652 2.65667V2.65667Z"
                          fill="#00703C"
                        />
                      </svg>
                      <a href="https://www.facebook.com/" className={s.fbLink}>
                        <span className={s.fbText}>Facebook</span>
                      </a>
                    </p>
                    <div className={s.lineBlack}></div>
                  </div>
                  <div>
                    <p className={s.sameNews}>Súvisiace témy:</p>
                  </div>
                  <ul className={s.list}>
                    <li className={s.item}>????</li>
                    <li className={s.item}>????</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleMenu;
