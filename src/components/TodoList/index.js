import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '~/store/actions/todos';

const TodoList = ({ todos, addTodo, markAsCompleted }) => (
  <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
    {todos.map(todo => (
      <Text
        onPress={() => markAsCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button onPress={addTodo} title="Add todo" />
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
