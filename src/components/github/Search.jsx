import React, {Component} from 'react';

class Search extends Component{
    onSubmit(e){
      e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username){
            alert("Please enter in a username");
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
        console.log("Submit")
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label> Search Github Users </label>
                    <input type="text" name="" id="" ref="username" className="form-control" placeholder="Search for Github user"/>
                </form>
            </div>
        );
    }
}

export default Search