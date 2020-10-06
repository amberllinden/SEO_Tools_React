import React, { Component } from "react";
import TextComponent from '../components/text';
import Button from '../components/button';
import Input from '../components/input';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    }
  }
  render() {
    const {val} = this.state;
    return (
      <>
        <TextComponent
          tag="h1"
          content="Тут будет заголовок"
        />
        <TextComponent
          tag="p"
          content="Тут будет текст"
        />
        <Button
          content="Тут будет кнопка"
          onClickFuntion={() => console.log('Cick!')}
        />
        <Input
          value={val}
          onChangeFunc={(v) => { this.setState({val: v.target.value}) }}
          inputType='text'
          placeholder='sn'
        />
      </>
    );
  }
}
 