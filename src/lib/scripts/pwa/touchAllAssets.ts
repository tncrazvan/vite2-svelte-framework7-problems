export default function touchAllAssets(){
    [
        //app
        "/",
        "/index.html",
        "/css/app.css",
        "/js/app.js",

        // fonts
        /* "/fonts/Framework7Icons-Regular.eot",
        "/fonts/Framework7Icons-Regular.ttf",
        "/fonts/Framework7Icons-Regular.woff",
        "/fonts/Framework7Icons-Regular.woff2",
        "/fonts/MaterialIconsOutlined-Regular.codepoints",
        "/fonts/MaterialIconsOutlined-Regular.otf",
        "/fonts/MaterialIcons-Regular.codepoints",
        "/fonts/MaterialIcons-Regular.ttf",
        "/fonts/MaterialIconsRound-Regular.codepoints",
        "/fonts/MaterialIconsRound-Regular.otf",
        "/fonts/MaterialIconsSharp-Regular.codepoints",
        "/fonts/MaterialIconsSharp-Regular.otf",
        "/fonts/MaterialIconsTwoTone-Regular.codepoints",
        "/fonts/MaterialIconsTwoTone-Regular.otf", */

        // images
        "/static/assets/images/login-header.jpg",
        "/static/assets/images/logo.png",
        "/static/assets/images/menu-logo.png",
        "/static/assets/images/on-board.png",
        "/static/assets/images/splash.png",
        "/static/assets/images/on-board.png",
        "/static/assets/images/srv-hotl.png",
        "/static/assets/images/temp.png",

        //icons
        "/static/icons/favicon.png",
        "/static/icons/128x128.png",
        "/static/icons/144x144.png",
        "/static/icons/152x152.png",
        "/static/icons/192x192.png",
        "/static/icons/256x256.png",
        "/static/icons/512x512.png",
        "/static/icons/apple-touch-icon.png",
    ].forEach(url=>fetch(url));
}