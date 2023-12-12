declare enum ModelType {
    NFCE = 65,
    NFE = 55,
 }

export interface BsGasModelCreate {
    operation: string | null | undefined;
    movement: string;
    situation: string;
    model: ModelType;
    series: number;
    number: number;
    supplier: string;
    issueDate: Date | string;
    genDate: Date | string;
    employee: string;
    freight: number;
    totalValue: number;
    product: string;
    quantity: number;
    unit: number;
    unitaryValue: number;
    total: number;
    discount: number;
    productFreight: number;
    expenses: number;
    insurance: number;
    icms: number;
    icmsST: number;
    ipi: number;
    pis: number;
    cofins: number;
    reweighing: string;
    weight: number;
    reweighingValue: number;
    method: string;
    finalTotal: number;
    account: string;
    condition: string;
}

export interface BsGasModel {
    id: number;
    operation: string;
    movement: string;
    situation: string;
    model: ModelType;
    series: number;
    number: number;
    supplier: string;
    issueDate: Date | string;
    genDate: Date | string;
    employee: string;
    freight: number;
    totalValue: number;
    product: string;
    quantity: number;
    unit: number;
    unitaryValue: number;
    total: number;
    discount: number;
    productFreight: number;
    expenses: number;
    insurance: number;
    icms: number;
    icmsST: number;
    ipi: number;
    pis: number;
    cofins: number;
    reweighing: string;
    weight: number;
    reweighingValue: number;
    method: string;
    finalTotal: number;
    account: string;
    condition: string;
}
