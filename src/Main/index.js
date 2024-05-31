import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { tasks } from '../mocks/tasks';

import { Container, TasksContainer } from './styles';

export default function Main() {

  function handleChangeStatusTask() {
    alert('Alterar Status Tarefa');
  }

  function handleConfirmDeleteTask() {
    alert('Confirmação de Exclusão');
  }

  function handleEditTask() {
    alert('Alterar Tarefa');
  }

  return (
    <Container>
      <Header />

      <TasksContainer>
        <Tasks
          tasks={tasks}
          onChangeStatusTask={handleChangeStatusTask}
          onEditTask={handleEditTask}
          onConfirmDeleteTask={handleConfirmDeleteTask}
        />
      </TasksContainer>
    </Container>
  );
}