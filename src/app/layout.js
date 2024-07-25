import { Figtree } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { CartProviderWrapper } from "./lib/useCart";


const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DiamondGrade Cards"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.className}`}>
        <UserProvider>
          <CartProviderWrapper>
            <Providers>{children}</Providers>
          </CartProviderWrapper>
        </UserProvider>
      </body>
    </html>
  );
}
