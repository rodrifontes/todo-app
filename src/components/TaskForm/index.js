import { useState } from 'react';

import { Form, Input } from './styles';

import Button from '../Button';

export default function TaskForm({ onPress, buttonLabel = "Salvar", task }) {
  const [id, setId] = useState(task?.id);
  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);

  return (
    <Form>
      <Input
        placeholder='Título'
        value={title}
        onChangeText={setTitle}
      />

      <Input
        placeholder='Descrição'
        value={description}
        onChangeText={setDescription}
      />

      <Button disabled={!title || !description} onPress={() => onPress({ id, title, description })}>
        {buttonLabel}
      </Button>
    </Form>
  );
}