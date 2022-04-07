/* import logo from './logo.svg'; */
/* import './App.css'; */
import {Amplify,  API, graphqlOperation }  from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import * as queries from './graphql/queries';
import awsExports from './aws-exports';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';

API.configure(awsExports)
Amplify.configure(awsExports)

function App({ signOut, user }) {


  const todo = { name: "My first todo", description: "Hello world!" };

/* create a todo */
 API.graphql(graphqlOperation(createTodo, {input: todo}));

/* update a todo */
 API.graphql(graphqlOperation(updateTodo, { input: { id: "", name: "Updated todo info" }}));

/* delete a todo */
 API.graphql(graphqlOperation(deleteTodo, { input: { id: "" }}));



  const allTodos = API.graphql(graphqlOperation(queries.listTodos))
  console.log(allTodos);
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}
export default withAuthenticator(App);
/* export default App; */
