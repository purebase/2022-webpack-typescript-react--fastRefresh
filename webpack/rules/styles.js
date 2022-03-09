/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {arrayFilterEmpty} from '../utils/helpers';
import {cssLoader, miniCssExtractLoader} from './useLoaderRuleItems';

/** css **/
export const cssRule = {
    test: /\.css$/,
    use: [miniCssExtractLoader, cssLoader],
};
