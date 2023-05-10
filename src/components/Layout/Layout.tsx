import { ReactNode } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);
