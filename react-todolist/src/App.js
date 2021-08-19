import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import React from 'react'
import './App.css';
import DoneList from './feature/components/DoneList';
import TodoList from './feature/components/TodoList';
import NotFound from './feature/notfound/notfound';
import { Layout } from 'antd';
import { useDispatch } from "react-redux";
import { getTodos } from "./feature/apis/todos";
import { addToDos } from "./feature/reducer/todoSlice";

const { Header, Footer,Content } = Layout;


function App() {

  const dispatch = useDispatch();
      getTodos().then((response) => {
          dispatch(addToDos(response.data))
      });


  return (
  
<React.Fragment>

<Layout>
    <BrowserRouter>
    <Header></Header>
       <nav>
          <ul>
            <li>
              <Link to="/">Todo List</Link>
            </li>
            <li>
              <Link to="/done">Done List</Link>
            </li>
          
          </ul>
        </nav>
    
        <div className="App">
         
        <Content></Content>
        <Switch>
          <Route exact path="/" component={TodoList}></Route>
          <Route exact path="/done" component={DoneList}></Route>
          <Route exact path="*" component={NotFound}></Route>
        </Switch>
        </div>
      <Footer></Footer>
      </BrowserRouter>
      
      </Layout>
      
      </React.Fragment>

      


  );
}

export default App;
