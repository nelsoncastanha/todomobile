import { useState } from "react";

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from './styles';
import { Task } from "../../components/Task";

export function Home(){
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  function handleTaskAdd() {
    if(tasks.includes(taskName)) {
      return Alert.alert('Tarefa Existe', 'Esta tarefa já existe.')
    }

    if(taskName.length === 0) {
      return Alert.alert('Tarefa vazia', 'Adicione um nome para a tarefa.')
    }

    setTasks(prevState => [...prevState, taskName]);
    setTaskName('');
  }

  function handleTaskRemove(name: string, isCompleted: boolean) {
    const message = isCompleted 
    ? `Remover a tarefa completa ${name}?` 
    : `Remover a tarefa ${name}?`;

    Alert.alert('Remover', message, [
      {
        text: 'Sim',
        onPress: () => {
          if (isCompleted) {
            setCompletedTasks(prevState => prevState.filter(task => task !== name));
          } else {
            setTasks(prevState => prevState.filter(task => task !== name))
          };
        },
      },
      {
        text: 'Não'
      }
    ]);
  }

  function handleTaskCompleted(name: string) {
    setTasks(prevState => prevState.filter(task => task !== name));
    setCompletedTasks(prevState => [...prevState, name]);
  }

  return (
    <View style={styles.container}>
      <Text>todo</Text>



      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>


      <View>
        <FlatList 
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task 
              key={item}
              name={item}
              onRemove={() => handleTaskRemove(item, false)}
              onCompletion={() => handleTaskCompleted(item)}
              completed={false}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <FlatList 
        data={completedTasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task 
            key={item}
            name={item}
            onRemove={() => handleTaskRemove(item, true)}
            completed
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}