import { tasks } from '../mocks/tasks';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

import { Container } from './styles';

export default function Main() {
  function handleChangeStatus(id) {
    alert(`Alterar Status da Tarefa ${id}`);
  }

  function handleEditTask(task) {
    alert(`Alterar Tarefa {${task.id}, ${task.title}, ${task.description}`);
  }

  function handleDeleteTask(id) {
    alert(`Deletar Tarefa ${id}`);
  } 

  return (
    <Container>
      <Header />

      <Tasks
        tasks={tasks}
        onChangeStatus={handleChangeStatus}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />

      <AddTaskButton onPress={() => alert('Cadastrar Tarefa')} />


      <DeleteConfirmModal />

    </Container>
  );
}