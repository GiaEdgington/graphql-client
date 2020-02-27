import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {getAuthorsQuery, addBookMutation} from '../queries/queries';


class AddBook extends Component {

    displayAuthors(){
        //data is two queries, need to refer to specific query (name given)
        var data =this.props.getAuthorsQuery;
        if(data.loading){
            return(<option disabled>Loading Authors...</option>)
        } else {
            return data.authors.map(author => {
            return(<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }

    render(){
        //console.log(this.props);
        console.log(this.props)
        return(
            <form className="add-book">

                <div className="field">
                    <label>Book name:</label>
                    <input type="text"/>
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text"/>
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>

                <button></button>

            </form>
        );
    }
}

export default compose (
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"})
)(AddBook);