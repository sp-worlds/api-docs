# Как переводить деньги с карты при помощи API?

## Аутентификация

Все запросы, о которых говориться в этом документе должны иметь корректный хедер "Authorization", подробнее [тут](./AUTHORIZATION.md)

## Запрос баланса

```
GET https://spworlds.ru/api/public/card
```

Пример ответа:

```json
{ "balance": 16 }
```

## Переводы

Чтобы совершить перевод надо сделать подобный запрос

```
POST https://spworlds.ru/api/public/transactions
```

Тело - JSON объект, содержащий:

- `receiver` - Строка, номер карты получателя
- `amount` - Количество аров для перевода
- `comment` - Комментарий для перевода
