import React from 'react';

import Todos from '../components/Todos';
import Calendar from '../components/Calendar';

function Home(){

  return(
    <div id="home-page">
      <div className="content-wrapper">
        <h1>Me nota!</h1>

        <div id="todo-n-calendar">
          <Todos />
          <Calendar />
        </div>
        <div className="table-container">
        </div>
      </div>
    </div>
  )
}
export default Home;