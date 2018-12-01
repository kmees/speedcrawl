import { constants } from 'router5'
import { RouteDefinition } from './router'

const routes: RouteDefinition[] = [
  {
    name: 'home',
    path: '/',
    forwardTo: 'rankings.player',
  },
  {
    name: 'rankings',
    path: '/rankings',
    forwardTo: 'rankings.player',
    component: null,
    children: [
      {
        name: 'player',
        path: '/',
        component: null,
      },
      {
        name: 'race',
        path: '/race',
      },
      {
        name: 'background',
        path: '/background',
      },
      {
        name: 'god',
        path: '/god',
      },
    ],
  },
  {
    name: constants.UNKNOWN_ROUTE,
    path: '/404',
    component: 'Error 404',
  },
]

export default routes