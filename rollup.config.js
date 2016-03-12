import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/umdEntry.js',
  dest: 'umd/fantasyLandStatic.js',
  plugins: [ nodeResolve(), commonjs(), babel() ],
  format: 'umd',
  moduleName: 'FantasyLandStatic',
}
