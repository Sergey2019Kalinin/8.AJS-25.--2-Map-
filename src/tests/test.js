import ErrorRepository from "../js/app";

test('числовой код ошибки - 1', () => {

  const input = 1;
  const expected = 'Имя персонажа должно содержать от 2 до 10 символов.';
  const received = (new ErrorRepository).translate(input);

  expect(received).toEqual(expected);
});

test('числовой код ошибки - 2', () => {

  const input = 2;
  const expected = 'Неверно указан тип персонажа. Доступные типы: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie.';
  const received = (new ErrorRepository).translate(input);

  expect(received).toEqual(expected);
});

test('числовой код ошибки - 3', () => {

  const input = 3;
  const expected = 'Нельзя повысить левел умершего.';
  const received = (new ErrorRepository).translate(input);

  expect(received).toEqual(expected);
});

test('числовой код ошибки - 4', () => {

  const input = 4;
  const expected = 'Добавление персонажа невозможно - он уже в команде.';
  const received = (new ErrorRepository).translate(input);

  expect(received).toEqual(expected);
});

test('неизвестный числовой код ошибки - 5', () => {

  const input = 5;
  const expected = 'Unknown error';
  const received = (new ErrorRepository).translate(input);

  expect(received).toEqual(expected);
});