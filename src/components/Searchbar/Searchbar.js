import { Component } from 'react';

import { SearchbarHeader, SearchForm, SearchFormButton, ButtonLabel, SearchFormInput } from '../Searchbar/Searchbar.styled';
import { SlMagnifier }  from "react-icons/sl";

export class Searchbar extends Component {
    state = { 
    query: '',
     } 

       
     handleChange = (event) => {
      this.setState({ query: event.target.value });
    };
    

     handleSubmit = (e) =>{
        e.preventDefault()
        const { query } = this.state;
        if (query.trim() === '') {
          alert('Please enter a search query!');
          return;
      }
      this.props.onSubmit(query);
     
      this.setState({ query: '' });
     }



    render() 
    { 
      const { query } = this.state;
        return (<SearchbarHeader>
            <SearchForm  onSubmit = {this.handleSubmit}>
              <SearchFormButton  type="submit" >
              < SlMagnifier/>
                <ButtonLabel>Search</ButtonLabel>
              </SearchFormButton>
          
              <SearchFormInput
                      type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handleChange}
                value={query}
              />
            </SearchForm>
          </SearchbarHeader>);
    }
 
  }



