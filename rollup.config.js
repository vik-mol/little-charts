import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.esm.js', format: 'esm' }
  ],
  plugins: [
    typescript(),
    postcss({
      modules:true,
      extensions: ['.css', '.scss', '.sass'],
      use: ['sass'],
      extract: true
    })
  ],
  external: ['react', 'react-dom']
};
