import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClientJs from "./components/bootstrapJs/bootstrapClient"
import "./globals.css";

export const metadata = {
  title: "MailCash",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#D9D9D9" }} data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">{children}</body>
      <BootstrapClientJs />
    </html>
  );
}
