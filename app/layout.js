import "./globals.css";


export const metadata = {
  title: "M Shop",
  description: "A shop where you can get all items here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
