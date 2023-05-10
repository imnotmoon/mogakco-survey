import { ReactNode } from 'react';
import { Root } from '../Result/Layout.css';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <Root>
    <Header />
    <div>{children}</div>
    <Footer />
  </Root>
);
