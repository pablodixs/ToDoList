import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

import './styles/global.css';

export function App() {
  return (
    <div> 
      <Header />
      <TaskList/>
    </div>
  )
}