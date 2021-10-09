import Today from '../../screens/Today'
import ListsTodo from '../../screens/ListsTodo'

interface IAppRouterConfig {
  name?: string
  path?: string
  exact?: boolean
  component?: React.FC<any> | React.FunctionComponent<any>
}

export const AppRouterConfig: IAppRouterConfig[] = [
  {
    name: 'ListsTodo',
    path: '/',
    exact: true,
    component: ListsTodo,
  },
  {
    name: 'ListsTodo',
    path: '/today',
    exact: true,
    component: Today,
  },
]
