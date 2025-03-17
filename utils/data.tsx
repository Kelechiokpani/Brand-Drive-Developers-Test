
export type Sale = {
    type: string;
    description: string;
    amount: number;
    date: string;
    time: string;
    status: string;
};

export const data: Sale[] = [
    { type: "Expense", description: "Staff Rent", amount: 20000, date: "10/10/2025", time: "21:20:02", status: "Successful" },
    { type: "Sales", description: "Oranges", amount: 4000, date: "10/10/2025", time: "21:20:02", status: "Successful" },
    { type: "Sales", description: "Milo", amount: 10000, date: "10/10/2025", time: "21:20:02", status: "Failed" },
    { type: "Purchase", description: "Milo", amount: 400000, date: "10/10/2025", time: "21:20:02", status: "Successful" },
    { type: "Sales", description: "Milo", amount: 30000, date: "10/10/2025", time: "21:20:02", status: "Successful" },
    { type: "Purchase", description: "Flower Vase", amount: 600000, date: "10/10/2025", time: "21:20:02", status: "Successful" },
    { type: "Expense", description: "Staff Salary", amount: 120000, date: "10/10/2025", time: "21:20:02", status: "Successful" },
    { type: "Expense", description: "Personal Cash", amount: 50000, date: "10/10/2025", time: "21:20:02", status: "Failed" },
    { type: "Expense", description: "Food Stuff", amount: 80000, date: "10/10/2025", time: "21:20:02", status: "Successful" },
    { type: "Expense", description: "Personal Cash", amount: 20000, date: "10/10/2025", time: "21:20:02", status: "Successful" },
];