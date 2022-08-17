class ErrorRepository  {
  constructor() {
    this.errors = new Map([
  [1, 'Имя персонажа должно содержать от 2 до 10 символов.'],
  [2, 'Неверно указан тип персонажа. Доступные типы: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie.'],
  [3, 'Нельзя повысить левел умершего.'],
  [4, 'Добавление персонажа невозможно - он уже в команде.']
]);
  }

  translate(code) {
    if ((this.errors).has(code)) {
      return this.errors.get(code)
    } else {
      return `Unknown error`
    }
  }
}

export default ErrorRepository;