window.onload = () => {
  updateTimeframes('daily');
};

function updateTimeframes(frequency) {
  //remove btn color then re-apply
  btnChangeColor(frequency);

  // change the timeframe tags
  const lasts = document.querySelectorAll('.last');
  lasts.forEach((last) =>
    frequency === 'daily'
      ? (last.innerHTML = 'Yesterday')
      : (last.innerHTML = `Last  ${frequency.slice(0, -2)}`)
  );

  //fetch data and display hrs
  fetch('data.json')
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      data.forEach((element) => {
        let hrs_cur = document.querySelector(
          `.${JSON.parse(JSON.stringify(element.title).toLowerCase())}-cur`
        );
        const hrs_pre = document.querySelector(
          `.${JSON.parse(JSON.stringify(element.title).toLowerCase())}-pre`
        );
        hrs_cur.innerHTML = `${element.timeframes[frequency].current}`;
        hrs_pre.innerHTML = `${element.timeframes[frequency].previous}`;
      });
    });
}

//helper function
function btnChangeColor(frequency) {
  document
    .querySelectorAll('.btn')
    .forEach((btn) => btn.classList.remove('btn-clicked'));
  document.getElementById(`${frequency}Btn`).classList.add('btn-clicked');
}
