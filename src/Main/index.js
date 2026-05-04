import { useState } from 'react';

import { tasks } from '../mocks/tasks';

import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import EditTaskModal from '../components/EditTaskModal';
import Header from '../components/Header';
import NewTaskModal from '../components/NewTaskModal';
import Tasks from '../components/Tasks';

import { Container } from './styles';

export default function Main() {
  const [isDeleteConfirmModalVisible, setIsDeleteConfirmModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskIdDeleted, setTaskIdDeleted] = useState();

  function handleChangeStatus(id) {
    alert(`Alterar Status da Tarefa ${id}`);
  }

  function handleEditTask(task) {
    setIsEditTaskModalVisible(true);
  }

  function handleDeleteTask(id) {
    setTaskIdDeleted(id);
    setIsDeleteConfirmModalVisible(true);
  }

  function handleDeleteConfirmModal() {
    setIsDeleteConfirmModalVisible(false);
    //alert(`Deletar Tarefa ${taskIdDeleted}`);
  }

  function handleNewTask(task) {
    setIsNewTaskModalVisible(false);
    alert(`Add tarefa com o titulo: ${task.title} e a descrição: ${task.description}`);
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

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />


      <DeleteConfirmModal
        visible={isDeleteConfirmModalVisible}
        onClose={() => setIsDeleteConfirmModalVisible(false)}
        onConfirm={handleDeleteConfirmModal}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleNewTask}
      />

      <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
      />

    </Container>
  );
}