import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import s from './ArticleDetailsView.module.css';
import Gallery from '../Gallery/Gallery';

const ArticleDetailsView = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [allArticles, setAllArticles] = useState(null);
  const [id, setId] = useState(articleId);
  useEffect(() => {
    fetch(`https://product-shop-api.herokuapp.com/product/`)
      .then(r => r.json())
      .then(setAllArticles)
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`https://product-shop-api.herokuapp.com/product/${id}`)
      .then(r => r.json())
      .then(setArticle)
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="container">
        <ul className={s.linkList}>
          <li className={s.linkItem}>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66673 13.1666V9.83331H9.3334V13.1666C9.3334 13.5333 9.6334 13.8333 10.0001 13.8333H12.0001C12.3667 13.8333 12.6667 13.5333 12.6667 13.1666V8.49998H13.8001C14.1067 8.49998 14.2534 8.11998 14.0201 7.91998L8.44673 2.89998C8.1934 2.67331 7.80673 2.67331 7.5534 2.89998L1.98007 7.91998C1.7534 8.11998 1.8934 8.49998 2.20007 8.49998H3.3334V13.1666C3.3334 13.5333 3.6334 13.8333 4.00007 13.8333H6.00007C6.36673 13.8333 6.66673 13.5333 6.66673 13.1666Z"
                fill="#0B0C0C"
              />
            </svg>
          </li>
          <li className={s.linkItem}>
            <Link to="/" className={s.linkUrl}>
              Domov
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
              Aktuality
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
              Aktivity
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
                    {allArticles &&
                      allArticles
                        .sort((a, b) => b.id - a.id)
                        .filter(e => e.id !== id)
                        .slice(0, 2)
                        .map((e, i) => (
                          // <Link to={`/actuality/activity/${e.id}`} className={s.item} key={i}>
                          //   {e.name}
                          // </Link>
                          <a
                            href={`/actuality/activity/${e.id}`}
                            className={s.linkSameTopics}
                            onClick={() => setId(e.id)}
                          >
                            {e.name}
                          </a>
                        ))}
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

export default ArticleDetailsView;
