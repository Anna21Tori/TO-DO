import {StatusTask} from './statusTask';

export interface Task{
  id ?: number;
  title: string;
  date: Date;
  status: StatusTask;
}
