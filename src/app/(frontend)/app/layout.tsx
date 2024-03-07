import BottomNavigation from './components/BottomNavigation';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#EBF5FB]">
      <main className="relative m-auto min-h-screen max-w-3xl overflow-hidden bg-[#ffffff] px-4 pb-20 pt-6 sm:px-8">
        {children}
      </main>
      <nav className="relative m-auto flex max-w-3xl items-center justify-center ">
        <BottomNavigation />
      </nav>
    </div>
  );
}
