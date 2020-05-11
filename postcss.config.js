module.exports = {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss')('tailwind.js'),
        require('cssnano'),
        require('postcss-custom-properties')({ preserve: false })
    ]
}
