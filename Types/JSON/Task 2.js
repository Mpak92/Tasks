const room = {
  number: 23,
};

const meetup = {
  title: 'Совещание',
  occupiedBy: [{
    name: 'Иванов',
  }, {
    name: 'Петров',
  }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, (key, value) => {
  console.log(`${key}: ${value}`);
  return (value === meetup && key !== '')
    ? undefined
    : value;
}));

/* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */
