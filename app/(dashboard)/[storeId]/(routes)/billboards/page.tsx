import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import { BillboardColumn } from "./components/columns";
import { format } from "date-fns";
const BillboardPage = async ({ params }: { params: { storeId: string } }) => {
    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId,
        },
        orderBy: {
            createAt: "desc",
        },
    });

    const formattedBillboard: BillboardColumn[] = billboards.map((item) => ({
        id: item.id,
        label: item.label,
        createAt: format(item.createAt, "MMMM do, yyyy"),
    }));
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient data={formattedBillboard} />
            </div>
        </div>
    );
};

export default BillboardPage;
