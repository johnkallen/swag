import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';

import { Link } from 'react-router-dom';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);


  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const actionClick = () => {
    inputRef.current.click();
  }

  const clearEditor = () => {
    console.log('clearEditor!');
  }

  
  const handleFileChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log('actionClick:' + items.action);
    console.log(file);
    // const files = e.target.files;
    // console.log('handleFileChange');
    // if (files.length > 0) {
    //   console.log('File received');
    //   const file = files[0];
    //   setFile(file);
    // } else {
    //   console.log('No File!');
    //   setFile(null);
    // }
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}

            {depthLevel > 0 &&
            window.innerWidth < 960 ? null : depthLevel > 0 &&
              window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.action ? (
        <Link to={items.url}>{items.title}</Link>
      ) : items.action === 'clear-editor' ? (
        <div>
          <a style={{padding: '10px'}} onClick={clearEditor} >{items.title} </a>
        </div>
      ) : items.action === 'load-swagger-yaml' ? (
        <div>
          <a style={{padding: '10px', maxWidth: '160px', maxHeight: '50px'}} onClick={actionClick} >{items.title}
            <input ref={inputRef} style={{visibility: 'hidden'}} type="file" accept=".yaml" onChange={handleFileChange} />
          </a>
        </div>
      ) : (
        // Default to LOAD JSON
        <div>
          <a style={{padding: '10px', maxWidth: '160px', maxHeight: '50px'}} onClick={actionClick} >{items.title}
            <input ref={inputRef} style={{visibility: 'hidden'}} type="file" accept=".json" onChange={handleFileChange} />
          </a>
        </div>
      )}
    </li>
  );
};

export default MenuItems;
