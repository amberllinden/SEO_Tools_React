import React from "react";
import { A } from 'hookrouter';
import TextComponent from "../components/text";

const Main = () => {
   return (
     <div className="application-main">
       <TextComponent
        tag="h1"
        content="SEO-шные полезности"
       />
       <TextComponent
         tag="div"
         content="Привет!"
       />
       <TextComponent
         tag="div"
         content="Здесь ты найдешь несколько полезных инструментов для упрощения SEO-шной рутины."
       />
      <ol>
        <li><A href="/arrays_comparison"><span>Удалить дубликаты из двух списков</span></A></li>
        <li><A href="/word_processor"><span>Проставить оператор "!" в ключевом запросе </span></A></li>
        <li><A href="/counting_characters"><span>Посчитать символы в тексте (с пробелами и без)</span></A></li>
        <li><A href="/query_processing"><span>Дополнить ключи хвостами</span></A></li>
        <li><A href="/url_counter"><span>Узнать, как часто домен встречается в списке</span></A></li>
      </ol>
       <TextComponent
         tag="div"
         content="Я написала их для себя, но мне не жалко поделиться :)"
       />
       <TextComponent
         tag="div"
         content="Если будут вопросы, предложения или найдется коварный баг: пиши на почту nikira89@list.ru"
       />
    </div>
   )
 }

 export default Main;