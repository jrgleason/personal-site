var environment = process.env.NODE_ENV || 'development';
switch (environment) {
    case 'prod':
    case 'production':
        module.exports = require('./build/webpack.prod')({env: 'production'});
        break;
    case 'dev':
    case 'development':
        module.exports = require('./build/webpack.dev')({env: 'development'});
        break;
    default:
        module.exports = require('./build/webpack.common')({env: 'common'});
}
