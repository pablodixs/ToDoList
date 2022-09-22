import { PlusCircle } from 'phosphor-react';
import styles from './TextArea.module.css';

export function TextArea() {
   return(
      <div className={styles.container}>
         <input className={styles.input} placeholder='Adicione uma nova tarefa' />
         <button>
            Criar
            <PlusCircle size={16} weight="bold" />
         </button>
      </div>
   )
}