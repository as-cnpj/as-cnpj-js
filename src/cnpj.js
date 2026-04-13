const CNPJ_LENGTH = 14;
const CNPJ_BASE_LENGTH = 12;
const MAX_INPUT_LENGTH = 18;

const PLAIN_CNPJ_PATTERN = /^[A-Z0-9]{12}[0-9]{2}$/;
const MASKED_CNPJ_PATTERN = /^[A-Z0-9]{2}\.[A-Z0-9]{3}\.[A-Z0-9]{3}\/[A-Z0-9]{4}-[0-9]{2}$/;
const CNPJ_BASE_PATTERN = /^[A-Z0-9]{12}$/;
const CNPJ_DIGITS_PATTERN = /^[0-9]{2}$/;
const REPEATED_CHARS_PATTERN = /^([A-Z0-9])\1{13}$/;
const ASCII_PRINTABLE_ONLY = /^[\x20-\x7E]*$/;

const FIRST_DIGIT_WEIGHTS = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const SECOND_DIGIT_WEIGHTS = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

function sanitize(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function isStrictFormat(value) {
  return PLAIN_CNPJ_PATTERN.test(value) || MASKED_CNPJ_PATTERN.test(value);
}

function charToValue(char) {
  return char.charCodeAt(0) - 48;
}

function calculateDigit(value, weights) {
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += charToValue(value[i]) * weights[i];
  }

  const remainder = sum % 11;

  return remainder < 2 ? 0 : 11 - remainder;
}

function formatNormalized(normalized) {
  return (
    normalized.slice(0, 2) + "." +
    normalized.slice(2, 5) + "." +
    normalized.slice(5, 8) + "/" +
    normalized.slice(8, 12) + "-" +
    normalized.slice(12, CNPJ_LENGTH)
  );
}

function analyzeCNPJ(value, options = {}) {
  if (typeof value !== "string") {
    return {
      index: -1,
      input: value,
      normalized: null,
      formatted: null,
      valid: false,
      strictValid: false,
      reason: "INVALID_TYPE"
    };
  }

  if (value.length > MAX_INPUT_LENGTH) {
    return {
      index: -1,
      input: value,
      normalized: null,
      formatted: null,
      valid: false,
      strictValid: false,
      reason: "INVALID_LENGTH"
    };
  }

  if (!ASCII_PRINTABLE_ONLY.test(value)) {
    return {
      index: -1,
      input: value,
      normalized: null,
      formatted: null,
      valid: false,
      strictValid: false,
      reason: "INVALID_ASCII"
    };
  }

  const normalized = sanitize(value);

  if (options.strict && !isStrictFormat(value.toUpperCase())) {
    return {
      index: -1,
      input: value,
      normalized: null,
      formatted: null,
      valid: false,
      strictValid: false,
      reason: "INVALID_STRICT_FORMAT"
    };
  }

  if (normalized.length !== CNPJ_LENGTH) {
    return {
      index: -1,
      input: value,
      normalized: null,
      formatted: null,
      valid: false,
      strictValid: false,
      reason: "INVALID_LENGTH"
    };
  }

  const base = normalized.slice(0, CNPJ_BASE_LENGTH);
  const digits = normalized.slice(CNPJ_BASE_LENGTH);

  if (!CNPJ_BASE_PATTERN.test(base) || !CNPJ_DIGITS_PATTERN.test(digits)) {
    return {
      index: -1,
      input: value,
      normalized: null,
      formatted: null,
      valid: false,
      strictValid: false,
      reason: "INVALID_BASE"
    };
  }

  if (REPEATED_CHARS_PATTERN.test(normalized)) {
    return {
      index: -1,
      input: value,
      normalized: null,
      formatted: null,
      valid: false,
      strictValid: false,
      reason: "TRIVIAL_REPETITION"
    };
  }

  const expectedDigits = calculateCNPJCheckDigits(base);

  if (normalized !== `${base}${expectedDigits}`) {
    return {
      index: -1,
      input: value,
      normalized: null,
      formatted: null,
      valid: false,
      strictValid: false,
      reason: "INVALID_CHECK_DIGIT"
    };
  }

  return {
    index: -1,
    input: value,
    normalized,
    formatted: formatNormalized(normalized),
    valid: true,
    strictValid: isStrictFormat(value.toUpperCase()),
    reason: "VALID"
  };
}

function validateAndNormalize(value, options) {
  const result = analyzeCNPJ(value, options);
  return result.valid ? result.normalized : null;
}

export function normalizeCNPJ(value) {
  if (typeof value !== "string") {
    throw new TypeError("A entrada deve ser uma string.");
  }

  return sanitize(value);
}

export function calculateCNPJCheckDigits(base12) {
  if (typeof base12 !== "string") {
    throw new TypeError("A base do CNPJ deve ser uma string.");
  }

  const normalizedBase = sanitize(base12);

  if (!CNPJ_BASE_PATTERN.test(normalizedBase)) {
    throw new TypeError("A base do CNPJ deve conter exatamente 12 caracteres alfanumericos.");
  }

  const firstDigit = calculateDigit(normalizedBase, FIRST_DIGIT_WEIGHTS);
  const secondDigit = calculateDigit(`${normalizedBase}${firstDigit}`, SECOND_DIGIT_WEIGHTS);

  return `${firstDigit}${secondDigit}`;
}

export function isValidCNPJ(value, options = {}) {
  return validateAndNormalize(value, options) !== null;
}

export function formatCNPJ(value, options = {}) {
  const result = analyzeCNPJ(value, options);

  if (!result.valid) {
    return null;
  }

  return result.formatted;
}

export function assertValidCNPJ(value, options = {}) {
  const normalized = validateAndNormalize(value, options);

  if (normalized === null) {
    throw new TypeError("CNPJ invalido.");
  }

  return normalized;
}

export function validateManyCNPJ(values, options = {}) {
  if (!Array.isArray(values)) {
    throw new TypeError("A entrada em lote deve ser um array.");
  }

  const items = values.map((value, index) => {
    const result = analyzeCNPJ(value, options);
    return {
      ...result,
      index
    };
  });

  const summary = items.reduce((accumulator, item) => {
    accumulator.total += 1;

    if (item.valid) {
      accumulator.valid += 1;
    } else {
      accumulator.invalid += 1;
      accumulator.reasons[item.reason] = (accumulator.reasons[item.reason] ?? 0) + 1;
    }

    return accumulator;
  }, {
    total: 0,
    valid: 0,
    invalid: 0,
    reasons: {}
  });

  return {
    items,
    summary
  };
}
