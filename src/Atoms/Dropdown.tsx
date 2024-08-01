import React, { CSSProperties, useEffect } from 'react';

const styles = {
  container: {
    position: 'relative',
    minWidth: '120px'
  } as CSSProperties,
  selected: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    padding: '4px 8px',
    borderRadius: '4px',
    cursor: 'pointer'
  } as CSSProperties,
  list: {
    position: 'absolute',
    padding: '16px',
    margin: '0',
    listStyle: 'none',
    border: '1px solid lightgray',
    borderRadius: '4px',
    cursor: 'pointer',
    top: '100%',
    left: 0,
    right: 0,
    boxShadow: '1px 1px 10px lightgray',
  } as CSSProperties,
  listItem: {
    marginBottom: '16px',
  } as CSSProperties
}

export const Dropdown = ({id, items, selectedItem, onSelect}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const onClick = (event) => {
    onSelect(event.target.textContent);
    setIsOpen(false);
  }
  
  useEffect(() => {
    return () => {
      setIsOpen(false);
    }
  }, []);

  // native element (select) should be used here for better accessibility
  return <div id={id} style={styles.container}>
    <div 
      style={styles.selected} 
      aria-expanded={isOpen} 
      aria-haspopup="listbox"
      role="combobox"
      aria-controls={`${id}-listbox`}
      onClick={() => setIsOpen(!isOpen)}>
      {selectedItem}
      <span>▼</span>
    </div>
    { isOpen && <ul style={styles.list} role="listbox" id={`${id}-listbox`}>{items.map((item, index) => {
        return item !== selectedItem && <li role="option" key={item} style={index === items.length - 1 ? null : styles.listItem} onClick={onClick}>
          {item}
        </li>
      })}
      </ul>
    }
  </div>;
}