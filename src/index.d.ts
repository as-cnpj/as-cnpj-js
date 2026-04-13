export interface ValidationOptions {
  strict?: boolean;
}

export interface BatchValidationItem {
  index: number;
  input: unknown;
  normalized: string | null;
  formatted: string | null;
  valid: boolean;
  strictValid: boolean;
  reason:
    | "VALID"
    | "INVALID_TYPE"
    | "INVALID_ASCII"
    | "INVALID_LENGTH"
    | "INVALID_STRICT_FORMAT"
    | "INVALID_BASE"
    | "TRIVIAL_REPETITION"
    | "INVALID_CHECK_DIGIT";
}

export interface BatchValidationSummary {
  total: number;
  valid: number;
  invalid: number;
  reasons: Partial<Record<BatchValidationItem["reason"], number>>;
}

export interface BatchValidationResult {
  items: BatchValidationItem[];
  summary: BatchValidationSummary;
}

/**
 * Remove mascara e converte para caixa alta.
 * Nao valida o CNPJ — use `isValid` para garantir validade.
 * @throws {TypeError} Se a entrada nao for string.
 */
export declare function normalize(value: string): string;
export declare function normalizeCNPJ(value: string): string;

/**
 * Calcula os dois digitos verificadores a partir da base de 12 caracteres.
 * @throws {TypeError} Se a base nao for string ou nao tiver exatamente 12 caracteres alfanumericos.
 */
export declare function calculateCheckDigits(base12: string): string;
export declare function calculateCNPJCheckDigits(base12: string): string;

export declare function isValid(value: unknown, options?: ValidationOptions): boolean;
export declare function isValidCNPJ(value: unknown, options?: ValidationOptions): boolean;

export declare function format(value: unknown, options?: ValidationOptions): string | null;
export declare function formatCNPJ(value: unknown, options?: ValidationOptions): string | null;

/**
 * Valida e retorna o CNPJ normalizado.
 * @throws {TypeError} Se o CNPJ for invalido.
 */
export declare function assertValid(value: unknown, options?: ValidationOptions): string;
export declare function assertValidCNPJ(value: unknown, options?: ValidationOptions): string;

export declare function validateMany(values: unknown[], options?: ValidationOptions): BatchValidationResult;
export declare function validateManyCNPJ(values: unknown[], options?: ValidationOptions): BatchValidationResult;
