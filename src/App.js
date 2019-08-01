import React, { Component } from 'react';
import List from './List'
import './App.css';
import store from './STORE';

class App extends Component {
  state= {
    store: {
      lists: store.lists,
      allCards: store.allCards,
    }
  };
   
  function handleRandomCard(){
    
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    this.setState({
      store: store
    })
  }
  

  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
