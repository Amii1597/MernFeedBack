import React, { Component } from 'react';
// import cogoToast from 'cogo-toast';
import axios from 'axios';
import './Comment.css'
import GetComment from './GetComment';
export default class AddComment extends Component {

  constructor(props){
    super(props);
   
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        content: '',
        upvotes: 0,
        downvotes: 0
    }
  }
  
  onChangeContent(e){
      this.setState({
          content : e.target.value
      });
  }

   onSubmit(e){
     e.preventDefault();
     const comment = {
         content : this.state.content,
     }
  
      if(!comment){
        window.alert('please comment');
      }
      else {
        window.alert("Added");
      const headers = { headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
        // "auth-header": jwt,
        }
        
      }
      axios.post('/add', comment, headers)
        .then(res => { 
          const json = { type: 'comment' };
          json.data = res.data;
          console.log(json);
          this.props.actions.send(JSON.stringify(json));
          this.setState({content : ''})
          
        })
        .catch((err)=>{
         console.error("Something is wrong");
      })
        .then(() => this.setState({content : ''}));
      }
    }
   
  render() {
    return (
   <>
       <div>

      <form onSubmit={this.onSubmit} >
          <div className="form-group">
          <GetComment/>
            <textarea rows="5"
                required
                className="form-control"
                value={this.state.content}
                placeholder="Type a comment"
                onChange={this.onChangeContent}>
            </textarea>
          </div>
          <div className="form-group" align="center">
            <input type="submit"
                className="btn btn-dark"
                value="Post Comment">
            </input>
          </div>
      </form>
      </div>
   </>
    );
  }
}