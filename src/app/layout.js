import "./global.css";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-[100vh]">{children}</main>
        <footer>this is footer</footer>
      </body>
    </html>
  );
}
