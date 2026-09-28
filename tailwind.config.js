/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 紙のような温かみのある白と、真っ黒ではない墨色
        paper: '#FBFBF8',
        ink: '#1A1A18',
        // 本文に添える補助テキスト（読みやすさを保つ濃さ）
        sub: '#4E4E46',
        // ラベルや日付など、控えめに置く文字
        muted: '#6E6E65',
        line: '#DCDAD2',
      },
      fontFamily: {
        // 欧文の見出し用セリフ体（next/fontで読み込む）
        display: ['var(--font-display)', 'Times New Roman', 'serif'],
        // 和文の見出し用明朝体
        mincho: ['var(--font-mincho)'],
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
