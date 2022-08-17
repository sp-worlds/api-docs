module.exports = {
  render(data) {
    let content = data.content;
    data.collections.all.forEach(
      ({ url, inputPath }) => (content = content.replaceAll(`href="${inputPath}"`, `href="${url}"`))
    );
    ['GET', 'POST'].forEach(
      m => (content = content.replaceAll(m, `<span class="${m.toLowerCase()}">${m}</span>`))
    );
    return `<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css">
        <link rel="shortcut icon" href="/logo.svg" type="image/svg+xml">
        <title>${data.title} - Документация SPWorlds</title>
      </head>
      <body>
        <header>
          <a href="/">
            <img src="/logo.svg" height="42" width="42" alt="" />
            Документация API Сайтов СП
          </a>
        </header>
        <main>${content}</main>
      </body>
    </html>`;
  }
};
