import { FlatList, TouchableOpacity } from 'react-native';

import { Text } from '../Text';

import {
  Task,
  TaskActions,
  TaskDescription,
  TaskFooter,
  TaskHeader,
  TaskIcon,
  TaskStatus
} from './styles';

import remove from '../../assets/images/delete.png';
import done from '../../assets/images/done.png';
import edit from '../../assets/images/edit.png';
import pending from '../../assets/images/pending.png';

export default function Tasks({ tasks, onChangeStatus, onEditTask, onDeleteTask }) {
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
            <TaskStatus onPress={() => onChangeStatus(task.id)}>
              <TaskIcon source={task.done ? done : pending} />
              <Text color={task.done ? '#2192D8' : '#E620AE'}>
                {task.done ? 'Feita' : 'Pendente'}
              </Text>
            </TaskStatus>

            <TaskActions>
              <TouchableOpacity onPress={() => onEditTask(task)}>
                <TaskIcon source={edit} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
                <TaskIcon source={remove} />
              </TouchableOpacity>
            </TaskActions>
          </TaskFooter>
        </Task>
      )}
    />
  );
}