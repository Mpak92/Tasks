function makeArmy() {
  const shooters = [];

  let i = 0;
  while (i < 10) {
    const shooter = () => {
      console.log(shooters.indexOf(shooter));
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

const army = makeArmy();

army[1](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
