import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Keyboard
} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AppButton from './src/components/AppButton/AppButton';
import AppInput from './src/components/AppInput/AppInput';
import TodoItem from './src/components/TodoItem';

import {store} from './src/app/store';
import {addNew, remove, update} from './src/features/todolist-slice';

function App(props) {
  const todolist = useSelector((state) => state.todolist.todo_list);
  const dispatch = useDispatch();
  const [borderColor, setBorderColor] = useState('#aaaaaa');
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState({
    done: false,
    title: '',
  });

  const handleInputBlur = () => {
    setBorderColor('#aaaaaa');
  };

  const handleInputFocus = () => {
    setBorderColor('#424242');
  };

  const handleTextChange = ({text}) => {
    setInput(text);
    setTodo({...todo, title: text});
  };

  const handleAddNewRecord = () => {
    // setTodo({...todo, title: input});
    dispatch(addNew(todo));
    Keyboard.dismiss();
  }

  const handleDeleteRecord = (item) => {
    dispatch(remove(item.title));
  }

  const handleUpdateRecord = (item) => {
    console.log(item);
    dispatch(update(item));
  }

  console.log(todolist);
  return (
    // <ScrollView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={require('./src/assets/images/0-U2DmhXYumRyXH6X1.png')}
          style={styles.image}
        />
      </View>
      <FlatList
        data={todolist}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <TodoItem content={item.title} ischeck={item.done} style={styles.item} deletePress={()=>handleDeleteRecord(item)} checkPress={()=>handleUpdateRecord(item)}/>
        )}
      />
      <View style={styles.add_button}>
        <AppInput
          placeholder="Add new record to list"
          style={styles.input}
          borderColor={borderColor}
          onBlur={handleInputBlur}
          onChangeText={text => handleTextChange({text})}
          onFocus={handleInputFocus}
          value={input}
        />
        <AppButton size={40} style={styles.button} onPress={handleAddNewRecord}/>
      </View>
      </KeyboardAvoidingView>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f8f8fa',
    flex: 1,
  },
  image_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  item: {
    width: '100%',
  },
  add_button: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    width: '20%',
    height: 40,
    marginLeft: 5,
  },
  input: {
    width: '80%',
    marginLeft: 5,
  },
});

export default App;
