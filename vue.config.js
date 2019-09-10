module.exports = {
    publicPath: '/', //设置域名路径用于生产环境没有放在根目录的情况，如 /pos/  process.env.NODE_ENV === 'production'? '/production-sub-path/': '/'
    devServer: {
        proxy: {//设置代理服务器
            '/': {
                target: 'http://192.168.2.23/',//目标地址
                changeOrigin: true,//虚拟路径托管
                ws: false,//代理websockets
                pathRewrite: {
                    '^/': '/'
                }
            }
        }, 
        port: '8000',
        open: true,
        disableHostCheck: true,//开启使用ip访问
    },
    outputDir: 'demo', //打包后的文件夹名
    chainWebpack: config => {//热更新配置
		// 修复HMR
		config.resolve.symlinks(true);
    },
    css:{
        modules:true,//可以去掉.vue文件中css的.module.格式
    }
}