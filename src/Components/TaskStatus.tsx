import React, { useCallback, useEffect, useState } from 'react';
import { Dropdown } from '../Atoms/Dropdown';
import { statuses, updateStatus } from '../task';

export const TaskStatus = ({id, status}) => {
  const [tasksError, setTasksError] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(status);

  // useOptimistic can be used here as an alternative
  const onStatusUpdate = useCallback(async (status) => {
    const previousStatus = selectedStatus;

    try {
      setSelectedStatus(status);
      await updateStatus(id, status);
      console.log('updateStatus() -', status);
    } catch (error) {
      // set back to previous status
      setSelectedStatus(previousStatus)
      setTasksError('Error in updating status!');
      console.log('Error in updating status! -', error);
    }
  }, [selectedStatus, setSelectedStatus, setTasksError]);

  return <Dropdown id={`${id}-task-status`} items={statuses} selectedItem={selectedStatus} onSelect={onStatusUpdate} />;
}