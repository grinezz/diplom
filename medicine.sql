-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 17 2022 г., 21:08
-- Версия сервера: 10.4.24-MariaDB
-- Версия PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `medicine`
--

-- --------------------------------------------------------

--
-- Структура таблицы `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `specialityID` int(11) NOT NULL,
  `doctorID` int(11) NOT NULL,
  `fio` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `requestDate` datetime NOT NULL,
  `cellphone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `specialities`
--

CREATE TABLE `specialities` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `icon` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `specialities`
--

INSERT INTO `specialities` (`id`, `name`, `icon`) VALUES
(1, 'Хирургия', 'img/Hir.png'),
(3, 'Дерматология', 'img/Derm.png'),
(4, 'Гинекология', 'img/Gin.png'),
(5, 'Диетология', 'img/Die.png'),
(6, 'Гематология', 'img/Gem.png'),
(7, 'Имуннология', 'img/Imm.png'),
(8, 'Гастроэнтерология', 'img/Gast.png'),
(9, 'Аллергология', 'img/Alle.png'),
(10, 'Неврология', 'img/Nerv.png'),
(11, 'Офтамология', 'img/Oft.png'),
(12, 'Эндоскопия', 'img/End.png'),
(13, 'Нейрохирургия', 'img/Neir.png');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fio` text NOT NULL,
  `photo` text NOT NULL,
  `description` text NOT NULL,
  `speciality` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `fio`, `photo`, `description`, `speciality`, `login`, `password`) VALUES
(1, 'Шаронов Дмитрий Анатольевич', 'img/Doctor1.png', ' Дмитрий получил степень бакалавра в Российском национальном исследовательском медицинском университете имени Н. И. Пирогова.', 1, 'dmitriydm', 'dmitriydm'),
(2, 'Епихин Николай Олегович', 'img/Doctor2.png', 'Николай специализируется на лечении кожи, волос, ногтей и слизистых оболочек. Он также решает косметические проблемы, помогая оживить внешний вид кожи, волос, ногтей.', 3, 'epihinnk', 'epihinnk'),
(3, 'Клюева Анна Дмитриевна', 'img/Doctor3.png', 'Анна окончила медицинский институт и прошла 3-летнюю ординатуру по Офтамологии. Она сдала строгие экзамены Российского совета медицины.', 11, 'annakl', 'annakl');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctorID` (`doctorID`),
  ADD KEY `specialityID` (`specialityID`);

--
-- Индексы таблицы `specialities`
--
ALTER TABLE `specialities`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `speciality` (`speciality`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `specialities`
--
ALTER TABLE `specialities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`doctorID`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requests_ibfk_2` FOREIGN KEY (`specialityID`) REFERENCES `specialities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`speciality`) REFERENCES `specialities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
