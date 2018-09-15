import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

/**
 * get获取数据
 */

export const cityGuess = () => fetch('https://api.github.com/users/yeWangye/repos');