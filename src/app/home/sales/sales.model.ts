export class Sales {
    column: Array<ColumnData>
    data: Array<Data>
}
export class ColumnData {
    header: string;
    field: string;
    subHeaders?: Array<SubHeading>
}
export class SubHeading {
    header: string;
    field: string;
}
export class Data {
    productID: number;
    productName: string;
    salesQ1: number;
    salesQ2: number;
    salesQ3: number;
    salesQ4: number;
    salesStartDate?: Date;
}