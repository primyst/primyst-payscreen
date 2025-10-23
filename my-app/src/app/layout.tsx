import './globals.css';

export const metadata = {
  title: 'Payment status screen',
  description: 'Payment status screen for a trip planning app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
