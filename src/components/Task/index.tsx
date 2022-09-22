import { Check, Trash } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';

import { TaskProps } from '../TaskList';

import styles from './Task.module.css';

interface Props {
   tasks: TaskProps,
   onDelete: (taskId: string) => void,
   onToggle: (taskId: string) => void,
};

export function Task({tasks, onDelete, onToggle}: Props) {
   return(
      <div className={tasks.isChecked ? styles.done : styles.task}>
         <Checkbox.Root onClick={() => onToggle(tasks.id)} className={styles.checkbox}>
            <Checkbox.Indicator className={styles.checkboxchecked}>
               <Check size={14} weight='bold' />
            </Checkbox.Indicator>
         </Checkbox.Root>

         <p>{tasks.title}</p>

         <button className={styles.trash} onClick={() => onDelete(tasks.id)}>
            <Trash
               className={styles.trash}
               size={16}
            />
         </button>
      </div>
   )
};