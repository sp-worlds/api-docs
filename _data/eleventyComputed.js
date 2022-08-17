module.exports = {
  permalink: data => `${data.page?.fileSlug.toLowerCase().replace('readme', '')}/index.html` || null
};
