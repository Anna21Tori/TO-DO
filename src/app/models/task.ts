import {StatusTask} from './statusTask';

export interface Task{
  id ?: number;
  title: string;
  date: string;
  status: StatusTask;
}
