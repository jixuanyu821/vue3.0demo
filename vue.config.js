module.exports = {
    publicPath: '/', //设置域名路径用于生产环境没有放在根目录的情况，如 /pos/  process.env.NODE_ENV === 'production'? '/production-sub-path/': '/'
    devServer: {
        proxy: { //设置代理服务器
            '/': {
                target: 'http://10.19.179.43:9012/riskwarning/', //目标地址
                changeOrigin: true, //虚拟路径托管
                ws: false, //代理websockets
                pathRewrite: {
                    '^/riskwarning/': '/'
                }
            }
        },
        port: '8000',
        open: true,
        disableHostCheck: true, //开启使用ip访问
    },
    outputDir: 'demo', //打包后的文件夹名
    chainWebpack: config => { //热更新配置
        // 修复HMR
        config.resolve.symlinks(true);
    },
    transpileDependencies: [
        'hui'
    ]
}