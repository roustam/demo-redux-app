import React from 'react'
import Button from '../components/StyledButton'
import {createStore} from '../createStore'
import { rootReducer } from '../redux/rootReducer';

const store  = createStore(rootReducer, 0)
window.store = store

const state = store.getState()

class AboutPage extends React.Component {

  render() {
    return(
      <div>
        <h2>About page</h2>
        <p>{this.props.textcontent}</p>
        <p>{state}</p>
        <Button buttonName='increment' onClickHandler={() => {store.dispatch({type:'INCREMENT'})}}></Button>
        <Button buttonName='decrement' onClickHandler={() => {store.dispatch({type:'DECREMENT'})}}></Button>      
      </div>
    )}
  }


export default AboutPage