import { Figtree } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { CartProviderWrapper } from "./lib/useCart";
import { GoogleTagManager } from '@next/third-parties/google' 


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
      <GoogleTagManager gtmId="GTM-TNXG3MF4" />
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
