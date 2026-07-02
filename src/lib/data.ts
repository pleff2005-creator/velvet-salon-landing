// Весь контент лендинга. В боевой версии выносится в CMS.

export const salon = {
  name: "ВЕЛЬВЕТ",
  city: "Москва",
  address: "Москва, ул. Большая Дмитровка, 12",
  phone: "+7 (495) 120-45-67",
  phoneHref: "tel:+74951204567",
  hours: "Ежедневно, 10:00 - 21:00",
};

export const navLinks = [
  { href: "#promo", label: "Акции" },
  { href: "#categories", label: "Услуги" },
  { href: "#price", label: "Прайс" },
  { href: "#about", label: "О нас" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export const stats = [
  { num: "9", label: "лет в центре города" },
  { num: "14", label: "мастеров в команде" },
  { num: "4.9", label: "рейтинг на картах" },
];

export type Promo = {
  badge: string;
  title: string;
  desc: string;
  now: string;
  old: string;
  feature?: boolean;
};

export const promos: Promo[] = [
  {
    badge: "Хит недели",
    title: "Образ в 4 руки",
    desc: "Стрижка, укладка и маникюр одновременно двумя мастерами за один визит.",
    now: "4 900 ₽",
    old: "6 500 ₽",
    feature: true,
  },
  {
    badge: "-30%",
    title: "Маникюр с покрытием",
    desc: "Аппаратный маникюр и стойкое гель-покрытие любимого оттенка.",
    now: "1 850 ₽",
    old: "2 650 ₽",
  },
  {
    badge: "Уход",
    title: "SPA-ритуал для лица",
    desc: "Глубокое очищение, массаж и увлажняющая маска, 60 минут.",
    now: "3 200 ₽",
    old: "4 000 ₽",
  },
  {
    badge: "Взгляд",
    title: "Брови и ресницы",
    desc: "Ламинирование, окрашивание и коррекция формы бровей в комплексе.",
    now: "2 400 ₽",
    old: "3 100 ₽",
  },
];

export type Category = {
  id: string;
  title: string;
  desc: string;
  icon: string; // ключ иконки в CategoryIcon
};

export const categories: Category[] = [
  { id: "hair", title: "Волосы", desc: "Стрижки, окрашивание, уходы и укладки для любой длины.", icon: "hair" },
  { id: "nails", title: "Ногтевой сервис", desc: "Маникюр, педикюр, укрепление и дизайн любой сложности.", icon: "nails" },
  { id: "cosmo", title: "Косметология", desc: "Чистки, пилинги, массаж лица и уходовые процедуры.", icon: "cosmo" },
  { id: "brows", title: "Брови и ресницы", desc: "Ламинирование, окрашивание, наращивание и коррекция.", icon: "brows" },
  { id: "makeup", title: "Макияж", desc: "Дневной, вечерний и свадебный образ, обучение самомакияжу.", icon: "makeup" },
  { id: "spa", title: "Массаж и SPA", desc: "Расслабляющие и уходовые ритуалы для тела и души.", icon: "spa" },
];

export type PriceItem = { name: string; note?: string; value: string };
export type PriceGroup = { id: string; label: string; items: PriceItem[] };

export const priceGroups: PriceGroup[] = [
  {
    id: "hair",
    label: "Волосы",
    items: [
      { name: "Женская стрижка", note: "мытьё, стрижка, укладка", value: "от 2 200 ₽" },
      { name: "Мужская стрижка", value: "от 1 500 ₽" },
      { name: "Окрашивание в один тон", value: "от 3 800 ₽" },
      { name: "Сложное окрашивание", note: "airtouch, балаяж, шатуш", value: "от 7 500 ₽" },
      { name: "Укладка", value: "от 1 400 ₽" },
      { name: "Уход и восстановление", value: "от 2 600 ₽" },
    ],
  },
  {
    id: "nails",
    label: "Ногтевой сервис",
    items: [
      { name: "Маникюр аппаратный", value: "от 1 200 ₽" },
      { name: "Маникюр с гель-покрытием", value: "от 1 850 ₽" },
      { name: "Педикюр с покрытием", value: "от 2 400 ₽" },
      { name: "Укрепление ногтей", value: "от 900 ₽" },
      { name: "Дизайн, за 1 ноготь", value: "от 100 ₽" },
    ],
  },
  {
    id: "cosmo",
    label: "Косметология",
    items: [
      { name: "Комбинированная чистка лица", value: "от 3 500 ₽" },
      { name: "Пилинг", value: "от 2 800 ₽" },
      { name: "Массаж лица", value: "от 2 200 ₽" },
      { name: "Уходовая процедура по типу кожи", value: "от 3 200 ₽" },
    ],
  },
  {
    id: "brows",
    label: "Брови и ресницы",
    items: [
      { name: "Коррекция и окрашивание бровей", value: "от 1 200 ₽" },
      { name: "Ламинирование бровей", value: "от 1 800 ₽" },
      { name: "Ламинирование ресниц", value: "от 2 300 ₽" },
      { name: "Наращивание ресниц", value: "от 2 600 ₽" },
    ],
  },
  {
    id: "makeup",
    label: "Макияж",
    items: [
      { name: "Дневной макияж", value: "от 2 500 ₽" },
      { name: "Вечерний макияж", value: "от 3 500 ₽" },
      { name: "Свадебный образ", note: "с репетицией", value: "от 7 000 ₽" },
      { name: "Урок самомакияжа", value: "от 4 000 ₽" },
    ],
  },
  {
    id: "spa",
    label: "Массаж и SPA",
    items: [
      { name: "Расслабляющий массаж, 60 мин", value: "от 3 000 ₽" },
      { name: "SPA-ритуал для тела", value: "от 4 200 ₽" },
      { name: "Массаж головы и шеи", value: "от 1 600 ₽" },
      { name: "Обёртывание", value: "от 3 400 ₽" },
    ],
  },
];

export const features = [
  { icon: "shield", title: "Стерильность", desc: "Инструмент проходит полный цикл обработки, одноразовое, где это нужно." },
  { icon: "star", title: "Премиум-материалы", desc: "Профессиональная косметика проверенных брендов, без экономии на качестве." },
  { icon: "team", title: "Свои мастера", desc: "Постоянная команда с опытом от 7 лет, а не случайные исполнители." },
  { icon: "heart", title: "Забота о комфорте", desc: "Кофе, тишина или разговор, детская зона по запросу, удобное расписание." },
];

export type Review = {
  name: string;
  service: string;
  text: string;
  initial: string;
  grad: string;
};

export const reviews: Review[] = [
  {
    name: "Анна Ветрова",
    service: "окрашивание, май 2026",
    text: "Хожу к Кате на окрашивание уже второй год. Цвет держится идеально, а волосы после айртач стали живее, чем были. Ни разу не пожалела.",
    initial: "А",
    grad: "linear-gradient(135deg,#7b3f4e,#a86b78)",
  },
  {
    name: "Дарья Лунёва",
    service: "SPA, апрель 2026",
    text: "Записалась на SPA-ритуал, чтобы просто выдохнуть после работы. Получила час полного спокойствия и кожу, которая наконец сияет. Теперь это мой ритуал по пятницам.",
    initial: "Д",
    grad: "linear-gradient(135deg,#5a2c37,#8b5566)",
  },
  {
    name: "Ксения Морозова",
    service: "свадебный макияж, июнь 2026",
    text: "Делала свадебный образ, включая репетицию заранее. Макияж продержался весь день до последнего танца, а на фото выглядел безупречно. Спасибо огромное команде.",
    initial: "К",
    grad: "linear-gradient(135deg,#623240,#b07f8b)",
  },
];

export const services = [
  "Волосы",
  "Ногтевой сервис",
  "Косметология",
  "Брови и ресницы",
  "Макияж",
  "Массаж и SPA",
];
