import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  name: string;
  onRemove: () => void;
  onCompletion?: () => void;
  completed?: boolean;
}

export function Task({ name, onRemove, onCompletion, completed }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkBox} onPress={onCompletion}>
        
      </TouchableOpacity>
      <Text style={completed? styles.completedTaskText : styles.name}>
        { name }
      </Text>

      <TouchableOpacity style={styles.trashButton}>
          <MaterialIcons name="delete-outline" style={styles.trashIcon} onPress={onRemove} />
        </TouchableOpacity>
    </View>
  );
}