"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Image as Images } from "@prisma/client";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

export type ProductColumn = {
    id: string;
    image: string;
    name: string;
    price: string;
    size: string;
    color: string;
    category: string;
    isFeatured: boolean;
    isArchived: boolean;
    createAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            return (
                <Image
                    src={row.original.image}
                    alt={row.original.image}
                    width={150}
                    height={150}
                    className="rounded-md"
                />
            );
        },
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "isArchived",
        header: "Archived",
        cell: ({ row }) => {
            return <Checkbox checked={row.original.isArchived} />;
        },
    },
    {
        accessorKey: "isFeatured",
        header: "Featured",
        cell: ({ row }) => {
            return <Checkbox checked={row.original.isFeatured} />;
        },
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "size",
        header: "Size",
    },
    {
        accessorKey: "color",
        header: "Color",
        cell: ({ row }) => (
            <div className="flex items-center gap-x-2">
                {row.original.color}
                <div
                    className="rounded-full border h-6 w-6"
                    style={{ backgroundColor: row.original.color }}
                />
            </div>
        ),
    },
    {
        accessorKey: "createAt",
        header: "Date",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
