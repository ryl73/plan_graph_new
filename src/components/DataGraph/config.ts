interface IHeader {
  title: string;
  vertical: boolean;
  style?: object;
}

export const headers: IHeader[] = [
  {
    title: "Маневровый район",
    vertical: true,
  },
  {
    title: "Назначение путей",
    vertical: false,
    style: {
      padding: "1rem 6rem",
    },
  },
  {
    title: "Номер пути",
    vertical: true,
  },
  {
    title: "Размер одновременной подачи/размер одновременной погрузки-выгрузки",
    vertical: true,
  },
  {
    title: "Количество вагонов в среднем в сутки",
    vertical: true,
  },
  {
    title: "Грузовая операция: Выгрузка[В] Погрузка[П]",
    vertical: true,
  },
  {
    title: "Норма времени на грузовую операцию (в минутах)",
    vertical: true,
  },
  {
    title: "Остаток вагонов на конец суток",
    vertical: true,
  },
];

interface IContext {
  label: string;
  typeId: number;
}

export const contextMenu: IContext[] = [
  {
    label: "Добавить перегон",
    typeId: 1,
  },
  {
    label: "Добавить стрелочную группу",
    typeId: 2,
  },
  {
    label: "Добавить путь",
    typeId: 3,
  },
  {
    label: "Добавить место погрузки/выгрузки",
    typeId: 4,
  },
  {
    label: "Добавить локомотив",
    typeId: 5,
  },
  {
    label: "Добавить бригаду ТО и КО",
    typeId: 6,
  },
];
