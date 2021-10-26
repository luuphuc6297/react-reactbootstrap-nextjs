/** @type {import('next').NextConfig} */
const { merge } = require('lodash');
const path = require('path');

const env = {
    NEXT_PUBLIC_APP_NAME: 'React React-bootstrap-Nextjs',
};

if (process.env.ENV_VARIABLES) {
    const overwriteEnvVariables = JSON.parse(process.env.ENV_VARIABLES);
    merge(env, overwriteEnvVariables);
}
console.info({ ENV_VARIABLES: env });

module.exports = {
    env,
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'mdx'],
    images: {
        domains: ['example.com'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
