/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {join} from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {isProd, rootDir, webpackDir} from '../utils/env';

export const cssLoader = {
    loader: 'css-loader',
};

/***
 * Using MiniCssExtractPlugin in production or style-loader in development
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/#root
 * @see https://webpack.js.org/loaders/style-loader/#root
 */
export const miniCssExtractLoader = isProd
    ? {
          loader: MiniCssExtractPlugin.loader,
          options: {
              esModule: false,
          },
      }
    : {
          loader: 'style-loader',
          options: {
              esModule: false,
          },
      };

/**
 * @see https://webpack.js.org/loaders/sass-loader/#problems-with-url
 */
export const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
        sourceMap: true,
    },
};

export const babelLoader = {
    loader: 'babel-loader',
    options: {
        configFile: join(rootDir, '/.babelrc.js'),
    },
};

export const cssModulesSupportLoaderItems = [
    miniCssExtractLoader,
    {
        ...cssLoader,
        options: {
            esModule: false,
            modules: {
                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[local]__[contenthash:base64:5]',
            },
        },
    },
];

export const cssLoaderItems = [miniCssExtractLoader, cssLoader];
