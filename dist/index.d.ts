type TaxidproOptions = {
    apiKey: string;
};
type ValidateOptions = {
    country: string;
    tin: string;
    type?: string;
};
type ValidateResponse = {
    is_valid: boolean;
    message: string | null;
    tin_compact: string;
    tin_standard: string;
    country_name: string;
    format_name: string;
};
type LookupResponse = ValidateResponse & {
    lookup_data: {
        name: string;
        address: string;
    };
};
export declare class Taxidpro {
    readonly apiKey: string;
    constructor({ apiKey }: TaxidproOptions);
    validate({ country, tin, type }: ValidateOptions): Promise<ValidateResponse>;
    lookup({ country, tin, type }: ValidateOptions): Promise<LookupResponse>;
}
export { Taxidpro as TaxIDPro };
