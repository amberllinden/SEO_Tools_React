import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes, A } from 'hookrouter';
import routes from "./routes/routes";

export function App() {
  const routeResult = useRoutes(routes);

  return (
    <>
      <A className="" href="/">Главная</A>
      <A className="" href="/arrays_comparison">Первый</A>
      <A className="" href="/counting_characters">Второй</A>
      <A className="" href="/query_processing">Третий</A>
      <A className="" href="/ur_counter">Четвертый</A>
      <A className="" href="/word_processor">Пятый</A>
      {routeResult}
    </>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
