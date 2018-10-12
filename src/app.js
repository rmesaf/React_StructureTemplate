import React from 'react';
import List from './components/list';

class App extends React.Component {
    render(){
        return (
            <div>
                <h2>Things to buy</h2>
                <List />
            </div>
        );
    }
}

export default App;