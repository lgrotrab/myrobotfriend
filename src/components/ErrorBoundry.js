import React, {Component} from 'react';

class ErroBoundry extends Component{
    constructor(){
        super();
        this.state={
            hasError:false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return <h1>Ooops there's was an a error</h1>
        }
        return this.props.children;
    }
}

export default ErroBoundry;