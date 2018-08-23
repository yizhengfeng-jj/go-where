module.exports = {
    root:true,
    extends:'standard',
    plugins:['html'],
    env: {
        browser:true,
        node:true
    },
    rules: {
        "semi":[2,"always"],
        "eol-last":0,
        "indent":['error', 4]
    }
}