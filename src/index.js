'use strict';
import css from './styles.css';

import { dom } from './lib/dom.js';
import { tasks } from './lib/tasks.js';
import { task } from './lib/task.js';
import { createANewTask } from './lib/create-a-new-task';
import { format, formatDistance, subDays } from 'date-fns';
import { storage } from './lib/storage.js';

dom.setUpInitialDom();
storage.getLocalStorage();
