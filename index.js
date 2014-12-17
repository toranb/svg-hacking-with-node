var SVGSprite = require('svg-sprite');
var options = {
    render: {
        css: 'sprite.css'
    },
    prefix: 'icon',
    spritedir: 'images/svg'
};
var callback = function(err, results) {
    //todo: throw error
};
SVGSprite.createSprite('images', 'dist/assets', options, callback);
