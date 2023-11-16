import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const App = () => {
  const [selectedDate, changeSelectedDate] = useState(new Date());

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#123123',
      },
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <div className="container">
          <div className="grup">
            <label>Fecha</label>
            <DatePicker value={selectedDate} onChange={changeSelectedDate} />
          </div>

          <div className="grup">
            <label>Hora</label>
            <TimePicker value={selectedDate} onChange={changeSelectedDate} />
          </div>
        </div>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

export default App;
