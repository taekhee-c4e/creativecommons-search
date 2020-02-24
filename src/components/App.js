import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import creativecommons from '../api/creativecommons';

class App extends React.Component {

    //init state
    state = {images: [] }
    onSearchSubmit = async (term) => {
        console.log(`term = ${term}`);
        const response = await creativecommons.get('/images', {
            params: {
                q:term,
                page_size: 100,
                license_type: 'all'
            }
        });
        // console.log(`response ${response}`)
        console.log(response)
        //console.log(response.data.results);
        this.setState({ images: response.data.results});
    }
    render() {
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images = { this.state.images } />
            </div>
        );
    }
    
}

export default App;