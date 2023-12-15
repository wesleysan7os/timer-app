import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { AppContainer } from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <AppContainer>
      <Header />
      <Outlet />
    </AppContainer>
  )
}
