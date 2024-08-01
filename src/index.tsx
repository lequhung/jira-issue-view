import React from 'react';
import { createRoot } from 'react-dom/client';
import { Task } from './Components/Task';

const root = createRoot(document.getElementById('root'));

root.render(
  <Task />
);