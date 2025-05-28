import { ConnectButton } from "@rainbow-me/rainbowkit";

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <ConnectButton />
    </div>
  );
}
