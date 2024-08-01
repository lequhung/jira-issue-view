import React, { CSSProperties, useCallback, useEffect, useState } from 'react';
import { getSubtasks } from '../task';
import { Accordion } from '../Atoms/Accordion';

const styles = {
  content: {
    marginBottom: '8px'
  } as CSSProperties,
  title: {
    fontWeight: 'bold'
  } as CSSProperties
} 

export const SubTasks = ({taskId, subTaskIds}) => {
  const [subTasks, setSubTasks] = useState([]);
  const [subTasksLoading, setSubTasksLoading] = useState(false);
  const [subTasksError, setSubTasksError] = useState('');

  const getSubTasks = useCallback(() => {
    setSubTasksLoading(true);
    
    // should we cache the data?
    getSubtasks().then((data) => {
      setSubTasks(data);
      console.log('getSubtasks() -', data);
    }).catch((error) => {
      setSubTasksError('Error in loading sub tasks!');
      console.log('getSubtasks() -', error);
    }).finally(() => {
      setSubTasksLoading(false);
      console.log('getSubtasks() - done');
    });
  }, [setSubTasks, setSubTasksLoading, setSubTasksError]);

  useEffect(() => {
    return () => {
      setSubTasks([]);
      setSubTasksLoading(false);
      setSubTasksError('');
    };
  }, []);

  return <Accordion id={`${taskId}-sub-tasks`} onClick={getSubTasks}>
    {subTasksLoading && <div>Loading sub tasks...</div>}
    {subTasksError && <div>{subTasksError}</div>}
    {!subTasksLoading && subTasks.map((subTask) => {
      return <div key={subTask.id} style={styles.content}>
        <div style={styles.title}>{subTask.title}</div>
        <div>Description: {subTask.description}</div>
        <div>Assignee: {subTask.assignee}</div>
        <div>Status: {subTask.status}</div>
      </div>
    })}
  </Accordion>;
}