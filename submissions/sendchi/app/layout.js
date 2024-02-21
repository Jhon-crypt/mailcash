import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClientJs from "./components/bootstrapJs/bootstrapClient"
import "./globals.css";

export const metadata = {
  title: "SendChi",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <BootstrapClientJs />
    </html>
  );
}
