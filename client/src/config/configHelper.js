const fs = require('fs');
const localConfig = require('./local.config.json');
const defaultConfig = require('./config.json');

let secretConfig;

if (fs.existsSync('./src/config/secret.config.json')) {
    secretConfig = require('./secret.config.json');
}

module.exports = {
    getConfig() {
        if (process.env.NODE_ENV === 'production') {
            if(!secretConfig){
                config = {
                    "MAIL": {
                        "USER": process.env.MAIL_USER,
                        "PW": process.env.MAIL_PW,
                        "SMTP": process.env.MAIL_SMTP,
                        "PORT": process.env.MAIL_PORT
                    },
                    "USE_SSL": process.env.USE_SSL,
                    "APP": {
                        "TITLE": process.env.APP_TITLE,
                        "BASE_URL": process.env.BASE_URL
                    }
                }
            }
        } else {
            if(!config){
                config = require('../config/local.config.json');
            }
        }

        return Object.assign(defaultConfig, localConfig);
    },
    getKey(key) {
        if (secretConfig) {
            return secretConfig[key];
        }

        return process.env[key];
    },
};