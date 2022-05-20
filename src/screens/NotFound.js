import { Link } from 'react-router-dom';
import s from './NotFound.module.css';

const NotFound = () => {
  return (
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
      </ul>

      <p>NOT FOUND!</p>

      <button>
        <Link to="/" className={s.linkUrl}>
          GO TO MAIN PAGE!
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
