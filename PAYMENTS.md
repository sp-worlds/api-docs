# Как встроить оплату АРами на свой сайт / приложение?

## Аутентификация

Все запросы, о которых говориться в этом документе должны иметь корректный хедер "Authorization", подробнее [тут](./AUTHORIZATION.md)

## Создание запроса на оплату

Чтобы принять оплату АРами, надо сначала создать запрос на оплату. Он делается таким запросом

```
POST https://spworlds.ru/api/public/payment
```

В теле запроса должен быть JSON-объект, содержащий

- `amount` - Стоимость покупки в АРах
- `redirectUrl` - URL страницы, на которую попадет пользователь после оплаты
- `webhookUrl` - URL, куда наш сервер направит запрос, чтобы оповестить ваш сервер об успешной оплате
- `data` - Строка до 100 символов, сюда можно поместить любые полезные данных.

Ответ будет в формате JSON и будет содержать только

- `url` - Ссылка на страницу оплаты, на которую стоит перенаправить пользователя.

## Получение данных об успешной оплате

После успешной оплаты наш сервер отправит POST запрос по URL, который вы указали при создании запроса на оплату (webhookUrl).

Тело запроса будет в формате JSON:

- `payer` - Ник игрока, который совершил оплату
- `amount` - Стоимость покупки
- `data` - Данные, которые вы отдали при создании запроса на оплату

**Важно!** При обработке этого запроса надо подтвердить, что данные пришли из нашего сервера. Для этого в хедерах запроса есть хедер `X-Body-Hash` который содержит закодированный в base64 SHA256 [HMAC](https://ru.wikipedia.org/wiki/HMAC) хеш тела запроса, использующий как ключ api токен вашей карты. При приеме запроса вы сначала должны сгенерировать свой хеш и убедиться что он совпадает с хедером, прежде чем обрабатывать запрос.
