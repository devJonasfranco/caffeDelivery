import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { Home } from './pages/home/Home'
import { EntregaDoPedito } from './pages/entragaDopedido/EntregaDopedido'
import { CadastroDoPedido } from './pages/cadastroDopedido/CadastroDopedido'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/entregadopedido" element={<EntregaDoPedito />} />
        <Route path="/cadastrodopedido" element={<CadastroDoPedido />} />
      </Route>
    </Routes>
  )
}