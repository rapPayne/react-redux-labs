import React from 'react';
import { ShowArticle } from './ShowArticle';
import { EditArticle } from './EditArticle';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props, editMode: false };
  }

  render() {
    if (this.state.editMode)
      return <EditArticle article={this.state.article} toggleEditMode={this.toggleEditMode} changeText={this.changeText} changeArticle={this.changeArticle} />
    else
      return <ShowArticle article={this.state.article} toggleEditMode={this.toggleEditMode} />
  }

  changeText = event => {
    const propertyChanged = event.target.id;
    const value = event.target.value;
    this.setState(() => ({ article: { ...this.state.article, [propertyChanged]: value } }));
  }
  changeArticle = event => {
    event.preventDefault();
    this.toggleEditMode();
  }

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  }
}