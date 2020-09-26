module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        ['wildcard', {
            'exts': ["js", "vue"]
        }]
    ]
}
