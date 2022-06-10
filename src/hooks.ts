import { minify } from 'html-minifier';
import { prerendering } from '$app/env';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    transformPage({ html }) {
      if (prerendering) {
        return minify(html, {
          removeAttributeQuotes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          sortAttributes: true,
          sortClassName: true,
        });
      }

      return html;
    },
  });

  return response;
};
