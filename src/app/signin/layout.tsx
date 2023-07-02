export default function TournamentLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <h1>Hello</h1>
        {children}
      </section>
    )
  }