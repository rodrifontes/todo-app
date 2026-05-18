import { useSQLiteContext } from 'expo-sqlite';

export function useTasksDatabase() {
  const database = useSQLiteContext();

  async function show() {
    const sql = "SELECT * FROM tasks ORDER BY create_date desc";
    const response = await database.getAllAsync(sql);
    return response;
  }

  async function create(task) {
    const sql = "INSERT INTO tasks (title, description) VALUES ($title, $description);";

    const statement = await database.prepareAsync(sql);

    try {
      await statement.executeAsync({
        $title: task.title,
        $description: task.description
      });
    } catch (error) {
      console.log("Erro: " + error);
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function remove(id) {
    const sql = `DELETE FROM tasks WHERE id = ${id}`;
    await database.execAsync(sql);
  }

  async function update(task) {
    const sql = "UPDATE tasks SET title = $title, description = $description WHERE id = $id;";

    const statement = await database.prepareAsync(sql);

    try {
      await statement.executeAsync({
        $id: task.id,
        $title: task.title,
        $description: task.description
      });
    } catch (error) {
      console.log("Erro: " + error);
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function updateStatus(id) {
    const sql = `UPDATE tasks SET done = not done WHERE id = ${id}`;
    await database.execAsync(sql);
  }


  return { show, create, remove, update, updateStatus };

}