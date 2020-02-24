//show one image by itself
//auto adjustment for grid col

import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10) + 1;
        this.setState( {spans});
    };

     

    render() {
         // Build an array of items
      

        const {title, url,license,license_version, source, tags } = this.props.image;
       
        


        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <figure>
                    <img 
                        ref={this.imageRef}
                        alt={title}
                        src={url}
                    />
                    <figcaption>
                        {title} <br/>
                        {license} [{license_version}] <br />
                        <a href={url} target="_blank">{source}</a> <br />
                        Tags: [

                    
      {(() => {
          if ( tags ) {
            return tags.map(tag => tag.name + ", ")
            
          } 

          
      })()}]
    

                    </figcaption>
                </figure>
            </div>
        )
    }
}

export default ImageCard;