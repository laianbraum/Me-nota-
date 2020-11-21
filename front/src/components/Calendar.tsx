import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

function calendar() {



  return (
    <div className="calendar-wrapper">
      <Calendar
        locale="pt-BR"
        onClickDay={(value: Date) => {alert('Clicked day' + value)}}
      />
    </div>
  );
}

export default calendar;