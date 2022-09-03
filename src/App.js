import './App.css';
import React,{Component} from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
class App extends Component {
  constructor(){
    super()
    this.state = {
      Monsters:[],
      searchField:''
    }
    this.changeText = (event)=>{
      console.log(event)
      this.setState({searchField:event.target.value})
    }
  }
  componentDidMount(){
    const getMonsters= async()=>{
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await resp.json()
      this.setState({Monsters:data})
    }
    getMonsters()
  }
  render(){
    const changeText = (event)=>{
      console.log(event)
      this.setState({searchField:event.target.value})
    }
  return (
    <div className="App">
    <h1 className='heading'>Monsters Rolodex</h1>
      <SearchBox
        text={this.state.searchField}
        changeText={changeText}
        placeHolder={'search monsters'}
      />
      <CardList 
        monsters={this.state.Monsters.filter((monster)=>{
          return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })}
      />
    </div>
  );}
}

export default App;
