import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery=gql`
    {
        authors{
            name
            id
        }
    }
`

class AddBook extends Component {


    render(){
        //console.log(this.props);
        return(
            <div></div>
        );
    }
}

export default AddBook;