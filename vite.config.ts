import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig(async () => {
  const { default: tailwindcss } = await import('@tailwindcss/vite');

  return {
    plugins: [
      react(),
      tailwindcss(),
      dts({
        include: ['src'],
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx'],
      }),
    ],
    build: {
      lib: {
        entry: {
          index: resolve(__dirname, 'src/index.ts'),
          validators: resolve(__dirname, 'src/validators/index.ts'),
        },
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => {
          const ext = format === 'es' ? 'js' : 'cjs';
          return `${entryName}.${ext}`;
        },
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  };
});
