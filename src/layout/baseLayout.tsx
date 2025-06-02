import { Header } from '@/pages/home/header'; // Ajuste o caminho se necessário
import { Outlet } from 'react-router-dom';

export function BaseLayout() {
  return (
    <>
      <Header />
        <Outlet /> 
    </>
  );
}