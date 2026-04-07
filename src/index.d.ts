export interface ValidationOptions {
  strict?: boolean;
}

export declare function normalize(value: unknown): string;
export declare function normalizeCNPJ(value: unknown): string;

export declare function calculateCheckDigits(base12: string): string;
export declare function calculateCNPJCheckDigits(base12: string): string;

export declare function isValid(value: unknown, options?: ValidationOptions): boolean;
export declare function isValidCNPJ(value: unknown, options?: ValidationOptions): boolean;

export declare function format(value: unknown, options?: ValidationOptions): string | null;
export declare function formatCNPJ(value: unknown, options?: ValidationOptions): string | null;

export declare function assertValid(value: unknown, options?: ValidationOptions): string;
export declare function assertValidCNPJ(value: unknown, options?: ValidationOptions): string;

