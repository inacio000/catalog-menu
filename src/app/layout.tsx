
import "./globals.css";
import { Sidebar } from "../components/Sidebar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Section />
        <main className="main">
          <Sidebar />
          <section className="section_content">
              <div className="container">
                <h1>Максимум удовольствия от ежедневных дел с нашей новой техникой!</h1>
                <div>
                  {children}
                </div>
              </div>
          </section>
        </main>
      </body>
    </html>
  );
}
