import React, { CSSProperties, useCallback, useEffect, useState } from 'react';

const styles = {
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    cursor: 'pointer',
    marginBottom: '8px'
  } as CSSProperties,
  buttonArrow: {
    marginRight: '4px'
  } as CSSProperties,
  buttonText: {
    color: 'blue',
  } as CSSProperties,
  content: {
    marginLeft: '16px'
  }
} 

export const Accordion = ({ id, onClick, children}) => {
  const [expanded, setExpanded] = useState(false);

  const onButtonClick = useCallback(() => {
    if (onClick && !expanded) {
      onClick();
    }
    
    setExpanded(!expanded)
  }, [setExpanded, onClick, expanded]);

  useEffect(() => {
    return () => {
      setExpanded(false);
    }
  }, []);

  return <div id={id}>
    <button type="button" style={styles.button} aria-expanded={expanded} onClick={onButtonClick}>
      <span style={styles.buttonArrow}>{ expanded ? '▼' : '▶' }</span>
      <span style={styles.buttonText}>Show subtasks</span>
    </button>
    { expanded && <div style={styles.content}>{children}</div>}
  </div>;
}