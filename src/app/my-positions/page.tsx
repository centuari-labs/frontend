import { Card, CardHeader } from "@/components/ui/card";
import { BorrowList } from "./_components/borrow/borrow-list";
import { Accordion } from "@/components/ui/accordion";
import { LendList } from "./_components/lend/lend-list";

export default function MyPositions() {
  return (
    <div className="container mx-auto">
      <Card className="card-colorful px-6 bg-background py-0 mb-4 min-h-[calc(100vh-100px)]">
        <CardHeader className="border-b !py-6 px-0">
          <div className="flex justify-between w-full">
            <div>
              <h1 className="text-2xl font-semibold">My Positions</h1>
              <p className="text-sm text-muted-foreground">
                View your positions and manage your assets
              </p>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <p className="text-sm text-muted-foreground">Borrowed</p>
                <h1 className="text-xl font-bold">$100,000 MUSDC</h1>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Supplied</p>
                <h1 className="text-xl font-bold">$100,000 MUSDC</h1>
              </div>
            </div>
          </div>
        </CardHeader>
        <Accordion type="multiple" className="mb-4 flex flex-col gap-2">
          <BorrowList />
          <LendList />
        </Accordion>
      </Card>
    </div>
  );
}
