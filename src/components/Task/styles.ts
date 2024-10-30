import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  completedTaskText: {
    flex: 1,
    fontSize: 16,
    color: '#808080',
    marginLeft: 16,
    textDecorationLine: 'line-through',
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#F2F2F2',
    marginLeft: 16
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trashButton: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  trashIcon: {
    color: '#808080',
    fontSize: 22
  }
})