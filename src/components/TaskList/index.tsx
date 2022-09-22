import { Task } from '../Task';
import { useState, FormEvent, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './TaskList.module.css';
import clipboardIcon from '../../assets/Clipboard.svg';
import { PlusCircle } from 'phosphor-react';

export interface TaskProps {
   id: string;
   title: string;
   isChecked: boolean;
};

export function TaskList() {
   const [tasks, setTasks] = useState<TaskProps[]>([]);
   const [title, setTitle] = useState('');

   const numberOfTasks = tasks.length;
   const completedTasks = tasks.filter((tasks) => tasks.isChecked).length;

   function addTask(taskTitle: string) {
      setTasks([
         ...tasks,
         {
            id: uuidv4(),
            title: taskTitle,
            isChecked: false,
         }
      ]);
   };

   function handleSubmit(event: FormEvent) {
      event.preventDefault();
      if(title == '') {
         alert('Preencha o campo com uma nova tarefa.');
      } else {
         addTask(title);
      };
      setTitle('');
   };

   function changeTitle(event: ChangeEvent<HTMLInputElement>) {
      setTitle(event.target.value);
   };

   function deleteTask(taskId: string) {
      const newTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(newTasks);
   };

   function taskCompleted(taskId: string) {
      const newTasks = tasks.map(task => {
         if(task.id === taskId) {
            return {...task,
            isChecked: !task.isChecked,
            }
         } return task;
      })
      setTasks(newTasks);
   };

   return (
      <>
         <div>
            <form onSubmit={handleSubmit}>
               <input 
                  className={styles.input} 
                  placeholder='Adicione uma nova tarefa'
                  onChange={changeTitle}
                  value={title}
               />
               <button>
                  Criar
                  <PlusCircle size={16} weight="bold" />
               </button>
            </form>
         </div>
         <div className={styles.container}>
            <header className={styles.header}>
               <strong>Tarefas criadas <span>{numberOfTasks}</span></strong>
               <strong>Concluídas <span>{completedTasks} de {numberOfTasks}</span></strong>
            </header>
            
            {tasks.map(tasks => {
               return (
                  <Task
                     tasks={tasks}
                     onDelete={deleteTask}
                     onToggle={taskCompleted}
                  />
               )
            })}
            {tasks.length <= 0 && (
               <main className={numberOfTasks ? styles.hide : ''} >
                  <img src={clipboardIcon} />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <span>Crie tarefas e organize seus itens a fazer</span>
               </main>
            )}
         </div>
      </>
   );
};