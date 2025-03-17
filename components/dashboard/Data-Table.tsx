"use client";
import { useState } from "react";
import { ColumnDef, SortingState, flexRender, getCoreRowModel, getSortedRowModel, useReactTable, getFilteredRowModel } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {data, Sale} from "@/utils/data";


const columns: ColumnDef<Sale>[] = [
    { accessorKey: "type", header: "Type" },
    { accessorKey: "description", header: "Description" },
    {accessorKey: "amount", header: "Amount",
        cell: ({ row }) => (
            <span className={row.original.amount > 0 ? "text-green-600" : "text-red-600"}>
        {row.original.amount.toLocaleString()}
      </span>
        ),
    },
    { accessorKey: "date", header: "Date Created" },
    { accessorKey: "time", header: "Time Created" },
    {accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <span
                className={row.original.status === "Successful" ? "text-green-600" : "text-red-600"}
            >
        {row.original.status}
      </span>
        ),
    },
];


export default function SalesDataShadTable() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        state: { sorting, globalFilter },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="bg-white p-4 shadow-md rounded-lg p-6">

            <div className="flex items-center justify-between mb-8 mt-8">
                <h2 className="font-bold text-lg">Sales & Expense Records</h2>
                <Input
                    placeholder="Search by type, description, status..."
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="w-72 py-6"
                />
            </div>


            <div className="overflow-x-auto ">
                <Table>
                    <TableHeader className='bg-gray-100 '>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className="cursor-pointer font-bold"
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {header.column.getIsSorted() === "asc" && " 🔼"}
                                        {header.column.getIsSorted() === "desc" && " 🔽"}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
