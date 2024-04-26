import { defineConfig } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import { version as reactV } from 'react'
import { version as reactDomV } from 'react-dom'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    viteExternalsPlugin({
      react: 'React',
      'react-dom': 'ReactDOM',
    }),
    createHtmlPlugin({
      inject: {
        data: {
          injectScript: [
            `<script crossorigin src="https://unpkg.com/react@${reactV}/umd/react.${
              process.env.NODE_ENV === 'production' ? 'production.min' : 'development'
            }.js"></script>`,
            `<script crossorigin src="https://unpkg.com/react-dom@${reactDomV}/umd/react-dom.${
              process.env.NODE_ENV === 'production' ? 'production.min' : 'development'
            }.js"></script>`,
          ].join('\n'),
        },
      },
    }),
  ],
})
