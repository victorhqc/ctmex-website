/* eslint import/prefer-default-export: 0 */

import findIndex from 'lodash/findIndex';
import {
  routes as validRoutes,
} from '../../locales/es/main';

export const isExistingRoute = (route, routes = validRoutes) =>
  findIndex(routes, validRoute => validRoute.url === route) >= 0;
