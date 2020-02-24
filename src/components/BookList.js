import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';


//apollo client setup
const client = new ApolloClient({
    uri:'http://localhost:4000/graphql'
})

class BookList extends Component {
    render(){
        return(
            <div>
                <ul id="book-list">
                    <li>Book name</li>
                </ul>
            </div>
        )
    }
}

export default BookList;