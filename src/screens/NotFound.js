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
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.91967 14.5067C5.24633 14.8334 5.773 14.8334 6.09967 14.5067L11.6397 8.9667C11.8997 8.7067 11.8997 8.2867 11.6397 8.0267L6.09967 2.4867C5.773 2.16003 5.24633 2.16003 4.91967 2.4867C4.593 2.81337 4.593 3.34003 4.91967 3.6667L9.74633 8.50003L4.913 13.3334C4.593 13.6534 4.593 14.1867 4.91967 14.5067Z"
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
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.91967 14.5067C5.24633 14.8334 5.773 14.8334 6.09967 14.5067L11.6397 8.9667C11.8997 8.7067 11.8997 8.2867 11.6397 8.0267L6.09967 2.4867C5.773 2.16003 5.24633 2.16003 4.91967 2.4867C4.593 2.81337 4.593 3.34003 4.91967 3.6667L9.74633 8.50003L4.913 13.3334C4.593 13.6534 4.593 14.1867 4.91967 14.5067Z"
              fill="#0B0C0C"
            />
          </svg>
        </li>

        <li className={s.linkItem}>
          <Link to="/actuality/activity/" className={s.linkUrl}>
            Activity
          </Link>
        </li>
      </ul>

      <p>NOT FOUND!</p>
    </div>
  );
};

export default NotFound;
