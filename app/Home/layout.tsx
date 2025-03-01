import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

type Props = {
  children: React.ReactNode;
};

function HomeLayout({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 flex-col'>{children}</main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
