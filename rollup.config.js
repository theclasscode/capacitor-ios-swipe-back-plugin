export default {
  input: './index.js',
  output: [
    {
      file: './plugin.js',
      format: 'iife',
      name: 'iOSSwipeBack',
      globals: {
        '@capacitor/core': 'capacitorExports',
      },
      sourcemap: true,
      inlineDynamicImports: true,
    },
    {
      file: './plugin.cjs.js',
      format: 'cjs',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  external: ['@capacitor/core'],
};
