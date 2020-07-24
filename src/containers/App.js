import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(!robots.length){
            return <h1>Loading</h1>
        }else{
            return(
                <div className='tc'>
                    <header>
                        <h1 className='f1'>RoboFriends</h1>
                    </header>
                    <main>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundry>
                        </Scroll>
                    </main>
                </div>
            )
        }
       
    }   
}

export default App;