# Модуль сортировки элементов

## Оглавление

1. [Подключение](#Подключение)
2. [Структура сортировки](#Структура_сортировки)
3. [Активация сортировки](#Активация_сортировки)





## Подключение

Для подключения модуля необходимо добавить в html следующие строки

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="/module_sort.js"></script>
<link href="/module_sort.css" rel="stylesheet">
```

[Оглавление](#Оглавление)





## Структура сортировки

```html
<div module_sort__sort="{$selector}">
	<div module_sort__header>
		<div module_sort__filter="{$name_1}">
			Заголовок 1
		</div>
		<div module_sort__filter="{$name_2}">
			Заголовок 2
		</div>
		...
	</div>
	<div module_sort__element>
		<div module_sort__filter="{$name_1}" module_sort__val="{$val_1_1}">
			Текст поля 1
		</div>
		<div module_sort__filter="{$name_2}" module_sort__val="{$val_2_1}">
			Текст поля 2
		</div>
		...
	</div>
	<div module_sort__element>
		<div module_sort__filter="{$name_1}" module_sort__val="{$val_1_2}">
			Текст поля 1
		</div>
		<div module_sort__filter="{$name_2}" module_sort__val="{$val_2_2}">
			Текст поля 2
		</div>
		...
	</div>
	...
</div>
```

**module_sort__sort** - сортируемого блока
**module_sort__header** - блок заголовков
**module_sort__element** - сортируймый элемент
**module_sort__filter** - имя фильтра сортировки
**module_sort__val** - значение фильтра сортировки

[Оглавление](#Оглавление)





## Активация сортировки

Активация сортировки

```JavaScript
module_sort.activate({$selector})
```

- **$selector** - селектор сортируемого блока


[Оглавление](#Оглавление)





[![Logo](https://avatars0.githubusercontent.com/u/32844979?s=50 "RusaDrako")](https://github.com/RusaDrako/)
