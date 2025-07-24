import React from 'react';
import { createRoot } from 'react-dom/client';

export function render(pageContext) {
    const { Page, pageProps } = pageContext;
    const container = document.getElementById('root');
    createRoot(container).render(<Page {...pageProps} />);
}