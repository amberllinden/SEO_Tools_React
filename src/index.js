import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import { useRoutes, A } from 'hookrouter';
import routes from "./routes/routes";

export function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="wrapper">
      <div className="nav-menu">
          <A className="nav-menu_link" href="/"><span>Главная</span></A>
          <A className="nav-menu_link" href="/arrays_comparison"><span>Удаление дубликатов</span></A>
          <A className="nav-menu_link" href="/word_processor"><span>Оператор "!"</span></A>
          <A className="nav-menu_link" href="/counting_characters"><span>Подсчет символов</span></A>
          <A className="nav-menu_link" href="/query_processing"><span>Дополнение ключей</span></A>
          <A className="nav-menu_link" href="/ur_counter"><span>Встречаемость домена</span></A>
      </div>
      <div className="application">
        {routeResult}
      </div>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
