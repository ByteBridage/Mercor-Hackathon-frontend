import Sidebar from './sidebar'
import Navbar from './navbar'
export default function TournamentLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        <Sidebar/>
        <Navbar/>
        {children}
      </section>
    )
  }