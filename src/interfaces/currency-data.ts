// interfaces/currency-data.ts
export interface ICurrencyData {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
}

interface ICurrencyResponse {
    [key: string]: ICurrencyData;
}


export default ICurrencyResponse;