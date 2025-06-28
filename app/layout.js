import "./globals.css";





export const metadata = {
  title: "SMATECH",
  description: "SCHOOL OF MANAGEMENT AND SCIENCE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
