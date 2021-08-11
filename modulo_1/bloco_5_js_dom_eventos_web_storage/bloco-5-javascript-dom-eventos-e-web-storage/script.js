function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
 
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  calenderDays()

  function calenderDays() {
    let classDay = document.querySelector('#days')
    for (let index = 0; index < dezDaysList.length; index++) {
      let day = dezDaysList[index]
      let li = document.createElement('li')
      li.innerText = day
      classDay.appendChild(li)
      li.className = 'day'
  
      if (day === 24 || day === 31 || day === 25) {
        li.classList.add('holiday')
      }
      if (day === 4 || day === 11 || day === 18 || day === 25) {
        li.classList.add('friday')
      }
    }
  }

  function implementHolidayButton(feriados) {
    let button = document.createElement("button");
    let div = document.querySelector(".buttons-container");
    div.appendChild(button);
    button.innerText = "Feriados"
    button.id = "btn-holiday";
  }
implementHolidayButton()