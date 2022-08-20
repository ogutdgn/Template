import React from 'react';
import Layout from '../../components/Layout/Layout';
import TodoList from './TodoList';

const TodosPage = () => {
  return (
    <div>
        <Layout>
            <TodoList/>
        </Layout>
    </div>
  )
}

export default TodosPage;