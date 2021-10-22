// Включаем строгий режим
"use strict";







/** */
(function($) {
	/** Имя модуля */
	var MODULE_NAME = 'module_sort';
	/** Версия модуля */
	var MODULE_VERSION = '1.0.0';
	/* Автор модуля */
	var MODULE_AUTHOR = 'Петухов Леонид';
	/* Дата релиза модуля */
	var MODULE_DATE = '2021-08-25';
	/* Описание модуля */
	var MODULE_DESCRIPTION = 'Сортировка таблицы.';
	/* Объект */
	var object_module = {};





	/** Сортировка элементов */
	function sort_func($table_id, $name, $asc) {
		// Получаем таблицу
		var $table = $('[module_sort__sort=' + $table_id + ']').filter(':first');
		// Получаем строки
		var $rows = $table.find('[module_sort__element]');
		// Сортируем строки
		$rows.sort(function (a, b) {
			// Данные для сортировки из контрольных столбцов
			var $val_a = $(a).find('[module_sort__filter=' + $name + ']').attr('module_sort__val');
			var $val_b = $(b).find('[module_sort__filter=' + $name + ']').attr('module_sort__val');
			// Если данные - числа
			if ($.isNumeric($val_a) && $.isNumeric($val_b)) {
				$val_a = Number.parseInt($val_a);
				$val_b = Number.parseInt($val_b);
			}
			// Проверяем тип сортировки
			if ($asc) {
				return $val_a < $val_b ? -1: 1;
			} else {
				return $val_a > $val_b ? -1: 1;
			}
		})
		.appendTo( $table );
	};





	/** Чистит выделение для стрелок сортировки */
	function clean_select($table_id) {
		$('[module_sort__sort=' + $table_id + '] .module_sort__arrow_asc').removeClass('module_sort__select')
		$('[module_sort__sort=' + $table_id + '] .module_sort__arrow_desc').removeClass('module_sort__select')
	};










	/** Активирует таблицу - добавляем стрелки */
	object_module.activate = function ($selector) {
		// Получаем таблицу
		var $table = $($selector); //.filter(':first');
		// Генерируем id таблицы
		var $table_code = Math.floor(Math.random() * (99999 - 10000)) + 10000;
		$table.attr('module_sort__sort', $table_code);
		// Находим все столбцы для сортировки
		var $header_col = $table.find('[module_sort__header] [module_sort__filter]');
		// Проходим по всем столцам и добавляем стрелки
		$header_col.each(function( $index ) {
			var $obj = $(this);
			var $name = $obj.attr('module_sort__filter');
			var $block = $('<span></span>');
			$block
					.addClass('module_sort__arrow_block')
					.prependTo($obj);
			$('<a href="javascript: module_sort.sort_desc(' + $table_code + ', \'' + $name + '\');">⯅</a>')
					.addClass('module_sort__arrow_desc')
					.appendTo($block);
			$('<a href="javascript: module_sort.sort_asc(' + $table_code + ', \'' + $name + '\');">⯆</a>')
					.addClass('module_sort__arrow_asc')
					.appendTo($block);
		});
	};





	/** Файлы (настройки по умолчанию) */
	object_module.sort_asc = function ($table_id, $name) {
		sort_func($table_id, $name, true);
		// Чстим выделения стрелок
		clean_select($table_id);
		// Выделяем стрелку
		$('[module_sort__sort=' + $table_id + '] [module_sort__header] > [module_sort__filter=' + $name + '] .module_sort__arrow_asc').addClass('module_sort__select')
	};





	/** Файлы (настройки по умолчанию) */
	object_module.sort_desc = function ($table_id, $name) {
		sort_func($table_id, $name, false);
		// Чстим выделения стрелок
		clean_select($table_id);
		// Выделяем стрелку
		$('[module_sort__sort=' + $table_id + '] [module_sort__header] > [module_sort__filter=' + $name + '] .module_sort__arrow_desc').addClass('module_sort__select')
	};





	/** Возвращает объект с информацией о модуле */
	object_module.info = function() {
		return {
			module: MODULE_NAME,
			version: MODULE_VERSION,
			date: MODULE_DATE,
			author: MODULE_AUTHOR,
			description: MODULE_DESCRIPTION
		};
	};





	/** Выводит сообщение с информацией о модуле */
	object_module.about = function() {
		alert(MODULE_NAME + '\nВерсия: ' + MODULE_VERSION + '\nДата: ' + MODULE_DATE + '\nРазработчик: ' + MODULE_AUTHOR + '\n\n' + MODULE_DESCRIPTION);
	};




	/**/
	window[MODULE_NAME] = object_module;

/**/
}(jQuery));
