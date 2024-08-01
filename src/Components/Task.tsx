import React, { CSSProperties, useCallback, useEffect, useState } from 'react';
import { getIssue } from '../task';
import { TaskStatus } from './TaskStatus';
import { SubTasks } from './SubTasks';

const styles = { 
  container: {
    display: 'flex',
    flexDirection: 'column'
  } as CSSProperties,
  taskContainer: {
    display: 'flex'
  } as CSSProperties,
  taskHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  } as CSSProperties
};

export const Task = () => {
  const [task, setTask] = useState(undefined);
  const [taskLoading, setTaskLoading] = useState(false);
  const [taskError, setTaskError] = useState('');

  const loadTask = useCallback(() => {
    setTaskLoading(true);
    
    getIssue().then((data) => {
      setTask(data);
      console.log('getIssue() -', data);
    }).catch((error) => {
      setTaskError('Error in loading tasks!');
      console.log('getIssue() -', error);
    }).finally(() => {
      setTaskLoading(false);
      console.log('getIssue() - done');
    });
  }, [getIssue, setTask, setTaskLoading, setTaskError]);

  useEffect(() => {
    loadTask();

    return () => {
      setTask(undefined);
      setTaskLoading(false);
      setTaskError('');
    };
  }, []);

  return (
    <div style={styles.container}>
      {taskLoading && <div>Loading tasks...</div>}
      {taskError && <div>{taskError}</div>}
      {(!taskLoading && task) && <div>
        <div style={styles.taskHeader}>
          <h1>{task.title}</h1>
          <TaskStatus id={task.id} status={task.status} />
        </div>
        <div>
          <SubTasks taskId={task.id} subTaskIds={task.subtasks} />
        </div>
      </div>}
    </div>
  );
};
