import { useState } from 'react';

import { ActivityIndicator } from 'react-native';

import { Text } from '../components/Text';

import taskEmptyImage from '../assets/images/task.png';
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import EditTaskModal from '../components/EditTaskModal';
import Header from '../components/Header';
import NewTaskModal from '../components/NewTaskModal';
import Tasks from '../components/Tasks';

import { CenteredContainer, Container, TaskEmpty } from './styles';

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [isDeleteConfirmModalVisible, setIsDeleteConfirmModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskIdDeleted, setTaskIdDeleted] = useState();
  const [taskBeingEdited, setTaskBeingEdited] = useState();

  function handleChangeStatus(id) {
    alert(`Alterar Status da Tarefa ${id}`);
  }

  function handleEditTask(task) {
    setTaskBeingEdited(task);
    setIsEditTaskModalVisible(true);
  }

  function handleSaveEditTask() {
    setIsEditTaskModalVisible(false);
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

      {!isLoading && tasks.length > 0 && (
        <Tasks
          tasks={tasks}
          onChangeStatus={handleChangeStatus}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      )}

      {!isLoading && tasks.length === 0 && (
        <CenteredContainer>
          <TaskEmpty source={taskEmptyImage} />
          <Text weight="600" size="20" opacity={0.8}> Sem Tarefas </Text>
          <Text opacity={0.5}> Não há tarefas a serem visualizadas</Text>
        </CenteredContainer>
      )}

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator size={'large'} color="#666" />
        </CenteredContainer>
      )}

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
        onSave={handleSaveEditTask}
        task={taskBeingEdited}
      />

    </Container>
  );
}