import { useState } from 'react';

import { Form, Input } from './styles';

import Button from '../Button';

export default function TaskForm({ onPress }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

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

      <Button onPress={() => onPress({ title, description })}>Salvar</Button>
    </Form>
  );
}