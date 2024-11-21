// import Portal from "../components/graphics/portal";

import { PrivyClient } from "@privy-io/server-auth";
import Head from "next/head";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import LoginButton from "@/components/LoginButton";
import WalletCard from "@/components/WalletCard";

export default async function LoginPage() {
  const cookieStore = await cookies();
  const cookieAuthToken = cookieStore.get("privy-token")?.value;

  // If no cookie is found, skip any further checks
  if (cookieAuthToken) {
    const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
    const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET;
    const client = new PrivyClient(PRIVY_APP_ID!, PRIVY_APP_SECRET!);

    try {
      const claims = await client.verifyAuthToken(cookieAuthToken);
      console.log({ claims });

      // Redirect to dashboard if token is valid
      redirect("/dashboard");
    } catch (error) {
      // Handle error if needed
      console.error("Token verification failed:", error);
    }
  }

  return (
    <>
      <Head>
        <title>Login · Privy</title>
      </Head>

      <main className="flex flex-col min-h-screen min-w-full">
        <div className="flex bg-privy-light-blue flex-1 p-6 justify-center items-center">
          <div>
            <div className="mt-6 flex justify-center text-center">
              <LoginButton />
            </div>
            {/* <div className="mt-6">
              <WalletCard />
            </div> */}
          </div>
        </div>
        <div className="container mx-auto max-w-screen-lg">
          <WalletCard />
        </div>
      </main>
    </>
  );
}
