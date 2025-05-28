import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-8 pb-8 bg-background">
      <ConnectButton />
      <p className="text-2xl font-bold">Centuari Testnet App</p>
      <Button variant={"colorful"} size={"lg"} className="w-fit">
        Place Order
      </Button>
    </div>
  );
}
