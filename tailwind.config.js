/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/hexo-theme/layout/**/*.ejs',
    './themes/hexo-theme/source/**/*.js',
    './source/**/*.md',
    './source/**/*.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 暖中性灰阶（纸感 / 近黑）
        gray: {
          50: '#faf9f6',
          100: '#f2f0ea',
          200: '#e4e0d6',
          300: '#cbc5b8',
          400: '#a29b8e',
          500: '#7d766c',
          600: '#5c564e',
          700: '#3d3934',
          800: '#211f1c',
          900: '#100f0d',
          950: '#0a0908',
        },
        // 琥珀金主色
        primary: {
          50: '#fdf8e9',
          100: '#f9ecc4',
          200: '#f2d98c',
          300: '#e9c256',
          400: '#ddaa2f',
          500: '#c9911f',
          600: '#ab761a',
          700: '#8a5c17',
          800: '#6e4917',
          900: '#5a3c17',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      letterSpacing: {
        label: '0.14em',
      },
      maxWidth: {
        prose: '46rem',
      }
    },
  },
  plugins: [],
}
