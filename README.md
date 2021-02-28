# [React game][]

[![dependencies Status](https://status.david-dm.org/gh/aplatkouski/react-game.svg)](https://david-dm.org/aplatkouski/react-game)
[![devDependencies Status](https://status.david-dm.org/gh/aplatkouski/react-game.svg?type=dev)](https://david-dm.org/aplatkouski/react-game?type=dev)

**Deadline**: 03.03.2021 23:59

### Basic scope +30

- [ ] +10 вёрстка, дизайн, UI. Выполняются требования к оформлению приложения
- [ ] +10 эффекты анимации. Анимация ходов, перемещения фигур, допустимых и недопустимых
      ходов, начала и окончания игры, победы и поражения и т.д
- [ ] +10 механика игры. Ходы, перемещения фигур, набранные баллы, окончание игры и т.д.
      подчиняются определённым свойственным игре правилам

### Advanced scope +50

- [ ] +10 звуки и музыка. В игре есть звуки и музыка, и есть настройки звуков и музыки:
      возможность вкл/откл звуки, вкл/откл музыку, регулировать громкость звуков, регулировать
      громкость музыки
- [ ] +10 настройки игры. Есть не меньше трёх настроек разных опций игры, например,
      внешний вид игрового поля и фигур, сложность игры, определение порядка ходов. Речь не
      про настройки звуков и музыки, которые проверялись и оценивались в предыдущем пункте.
      Это должны быть настройки разных опций, а не три параметра одной опции, например,
      размера игрового поля
- [ ] +10 статистика. Пользователь информируется о состоянии игры, ведётся запись ходов,
      побед и поражений, времени игры, либо отображается другая статистика игры. Есть таблица
      рекордов, в которой сохраняются результаты предыдущих 10 игр
- [ ] +10 сохранение состояния игры при перезагрузке страницы. Сохраняются все опции игры:
      ходы, набранные очки, положение фигур и т д. Состояние игры сохраняется без
      необходимости кликать по кнопке save. Есть кнопка new game для запуска новой игры
- [ ] +10 возможность управления игрой с клавиатуры или не меньше пяти hot keys. Есть
      список горячих клавиш для управления игрой с клавиатуры

### Hacker scope +20

- [ ] +10 автопроигрывание игры. Есть кнопка Autoplay запускающая игру в автоматическом
      режиме. Это может быть отдельная партия игры (крестики-нолики, шашки, шахматы, морской
      бой, судоку и т.д.). Для бесконечных игр (тетрис, Flappy Bird и т.д), игра зацикливается
      не раньше чем через 30 ходов. Речь не про автозавершение начатой игры, автопроигрывание
      игры начинает игру с пустого поля или стандартной раскладки и показывает как эта игра
      сама играет без пользователя
- [ ] +10 дополнительная функциональность. Реализована достаточно сложная в реализации
      дополнительная функциональность, которая улучшает качество игры. В качестве
      дополнительной функциональности рекомендуется создать и использовать бекенд, например,
      для хранения счёта игры. Также может быть и другая дополнительная функциональность,
      например, 3d игра, написана логика для компьютерного противника, есть сетевой режим
      игры, и т.д.

[react game]: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-game.md
