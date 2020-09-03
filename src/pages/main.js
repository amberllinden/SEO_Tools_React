import React, { Component } from "react";
import TextComponent from '../components/text';

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
      </>
    );
  }
}
 