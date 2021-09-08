/**
 * Setup and merge configuration
 */
// define configuration for task usage
var configuration = {
    scssFiles: [
        {
            srcset: [ './Resources/Private/Scss/*.scss'],
            dest: './dist/Resources/Public/Styles/'
        }
    ],
    javascriptFiles: [
    ],
    target: {
        src: [
            './**/*',
            '!Resources/**/*.css',
            '!node_modules{,/**}',
            '!.git{,/**}',
            '!build{,/**}',
            '!dist{,/**}'
        ],
        dir: 'dist/.'
    },
    deploy: {
        dir: '/var/www/dist/Packages/Application/TechDivision.DocViewer/',
        src: [
            'dist/**/*',
            '!dist/.git{,/**}'
        ]
    },
    docker: {
        container: process.env.DOCKER_CONTAINER_NAME,
        basepath: '/var/www/dist/Packages/Application/TechDivision.DocViewer/'
    },
    extension: {
        dir_src: ''
    }
};

module.exports = configuration;