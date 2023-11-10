import { Text } from '../components/Text';

import { CenteredContainer, Container, TasksContainer, TaksEmptyContainer, TaskEmptyImage } from './styles';

import empty from '../assets/images/task.png';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { useEffect, useState } from 'react';
import NewTaskModal from '../components/NewTaskModal';
import EditTaskModal from '../components/EditTaskModal';
import { ActivityIndicator } from 'react-native';
import { api } from '../utils/api';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskBeingEdit, setTaskBeingEdit] = useState();
  const [taskBeingDeleted, setTaskBeingDeleted] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks').then((response) => {
      setTasks(response.data);
      setIsLoading(false);
    });
  }, []);

  async function handleChangeSatusTask(task) {
    //Requisição de alteração status da tarefa
    const taskChange = (await api.put(`/tasks/status/${task.id}`)).data;

    setTasks((prevState) => {
      const itemIdex = prevState.findIndex(
        (taskItem) => taskItem.id === task.id
      );

      const newTasks = [...prevState];
      newTasks[itemIdex] = taskChange;

      return newTasks;
    });
  }

  function handleEditTask(task) {
    setTaskBeingEdit(task);
    setIsEditTaskModalVisible(true);
  }

  function handleConfirmDeleteTask(task) {
    setTaskBeingDeleted(task);
    setIsDeleteModalVisible(true);
  }

  async function handleDeleteTask() {
    //Requisição Delete
    await api.delete(`/tasks/${taskBeingDeleted.id}`);

    setTasks(prevState => prevState.filter(
      (task) => task.id !== taskBeingDeleted.id
    ))

    setIsDeleteModalVisible(false);
  }

  async function handleCreateTask(task) {
    //Requisição de cadastro de tarefa
    const taskAdd = (await api.post('/tasks', task)).data;

    const newTasks = [...tasks];

    newTasks.unshift(taskAdd);

    setTasks(newTasks);

    setIsNewTaskModalVisible(false);
  }

  async function handleSaveEditTasks(task) {
    //Requisição de alteração de tarefa
    const taskChange = (await api.put(`/tasks/${taskBeingEdit.id}`, task)).data;

    setTasks((prevState) => {
      const itemIdex = prevState.findIndex(
        (taskItem) => taskItem.id === taskBeingEdit.id
      );

      const newTasks = [...prevState];
      newTasks[itemIdex] = taskChange;

      return newTasks;
    });

    setIsEditTaskModalVisible(false);
  }

  return (
    <Container>
      <Header />

      {!isLoading && (
        <TasksContainer>
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onChangeStatusTask={handleChangeSatusTask}
              onConfirmDeleteTask={handleConfirmDeleteTask}
              onEditTask={handleEditTask}
            />
          ) : (
            <TaksEmptyContainer>
              <TaskEmptyImage source={empty} />

              <Text
                size={20}
                opacity={0.8}
                weight="600"
                style={{ marginTop: 16 }}
              >
                Sem Tarefas
              </Text>

              <Text
                opacity={0.5}
                style={{ marginTop: 8 }}
              >Não há tarefas a serem exibidas</Text>
            </TaksEmptyContainer>
          )}
        </TasksContainer>
      )}

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator color="#666" size="large" />
        </CenteredContainer>
      )}

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        onClose={() => setIsDeleteModalVisible(false)}
        visible={isDeleteModalVisible}
        onConfirm={handleDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleCreateTask}
      />

      <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        onSave={handleSaveEditTasks}
        task={taskBeingEdit}
      />
    </Container>
  );
}