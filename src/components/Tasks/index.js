import { Text } from '../Text';
import { Task, TaskActions, TaskDescription, TaskFooter, TaskHeader, TaskIcon, TaskStatus } from './styles';

import pending from '../../assets/images/pending.png';
import done from '../../assets/images/done.png';
import edit from '../../assets/images/edit.png';
import excluir from '../../assets/images/delete.png';
import { FlatList, TouchableOpacity } from 'react-native';


export default function Tasks({ tasks, onConfirmDeleteTask, onEditTask, onChangeStatusTask }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={task => task.id}
      renderItem={({ item: task }) => (
        <Task>
          <TaskHeader>
            <Text size={18} weight="600">{task.title}</Text>
          </TaskHeader>
          <TaskDescription>
            <Text opacity={0.5}>{task.description}</Text>
          </TaskDescription>
          <TaskFooter>
            <TaskStatus onPress={() => { onChangeStatusTask() }}>
              <TaskIcon source={pending} />
              <Text color="#E620AE">Pendente</Text>
            </TaskStatus>
            <TaskActions>
              <TouchableOpacity onPress={() => { onEditTask() }}>
                <TaskIcon source={edit} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { onConfirmDeleteTask() }}>
                <TaskIcon source={excluir} />
              </TouchableOpacity>
            </TaskActions>
          </TaskFooter>
        </Task>
      )}
    />
  );
}