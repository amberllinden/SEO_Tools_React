import React, { Component } from "react";
import TextComponent from '../components/text';
import Button from '../components/button';

export class Main extends Component {
  render() {
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
      </>
    );
  }
}
 