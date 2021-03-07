import {StatusTask} from './statusTask';
import {PriorityStatus} from './priorityStatus';

export interface Task{
  id ?: number;
  title: string;
  date: string;
  status: StatusTask;
  priority: PriorityStatus;
}
