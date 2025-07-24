import ReactDOMServer from 'react-dom/server';
import React from 'react';

export function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(<Page {...pageProps} />);
  return {
    documentHtml: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${pageContext.documentProps?.title || 'My Site'}</title>
        </head>
        <body>
          <div id="root">${pageHtml}</div>
        </body>
      </html>`
  };
}