import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries';


class AddBook extends Component {

    constructor(props){
        super(props);
        this.state={
            name: "",
            genre: "",
            authorId: ""
        }
    }

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

    submitForm = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addBookMutation({
            variables:{
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries:({ query: getBooksQuery })
        });
    }

    render(){
        //console.log(this.props);

        return(
            <form className="add-book" onSubmit={this.submitForm}>

                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e) => this.setState({genre: e.target.value})}/>
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => this.setState({author: e.target.value})}>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>

                <button>Submit</button>

            </form>
        );
    }
}

export default compose (
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"})
)(AddBook);