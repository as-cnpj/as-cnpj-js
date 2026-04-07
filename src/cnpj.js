const CNPJ_LENGTH = 14;
const CNPJ_BASE_LENGTH = 12;

const PLAIN_CNPJ_PATTERN = /^[A-Z0-9]{12}[0-9]{2}$/;
const MASKED_CNPJ_PATTERN = /^[A-Z0-9]{2}\.[A-Z0-9]{3}\.[A-Z0-9]{3}\/[A-Z0-9]{4}-[0-9]{2}$/;
const REPEATED_CHARS_PATTERN = /^([A-Z0-9])\1{13}$/;

const FIRST_DIGIT_WEIGHTS = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const SECOND_DIGIT_WEIGHTS = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

function sanitize(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function isStrictFormat(value) {
  return PLAIN_CNPJ_PATTERN.test(value) || MASKED_CNPJ_PATTERN.test(value);
}

function charToValue(char) {
  return char.charCodeAt(0) - 48;
}

function calculateDigit(value, weights) {
  const sum = [...value].reduce((total, char, index) => {
    return total + charToValue(char) * weights[index];
  }, 0);

  const remainder = sum % 11;

  return remainder < 2 ? 0 : 11 - remainder;
}

export function normalizeCNPJ(value) {
  return sanitize(value);
}

export function calculateCNPJCheckDigits(base12) {
  const normalizedBase = sanitize(base12);

  if (!/^[A-Z0-9]{12}$/.test(normalizedBase)) {
    throw new TypeError("A base do CNPJ deve conter exatamente 12 caracteres alfanumericos.");
  }

  const firstDigit = calculateDigit(normalizedBase, FIRST_DIGIT_WEIGHTS);
  const secondDigit = calculateDigit(`${normalizedBase}${firstDigit}`, SECOND_DIGIT_WEIGHTS);

  return `${firstDigit}${secondDigit}`;
}

export function isValidCNPJ(value, options = {}) {
  if (typeof value !== "string") {
    return false;
  }

  const uppercased = value.toUpperCase();

  if (options.strict && !isStrictFormat(uppercased)) {
    return false;
  }

  const normalized = sanitize(uppercased);

  if (!PLAIN_CNPJ_PATTERN.test(normalized)) {
    return false;
  }

  if (REPEATED_CHARS_PATTERN.test(normalized)) {
    return false;
  }

  const base = normalized.slice(0, CNPJ_BASE_LENGTH);
  const expectedDigits = calculateCNPJCheckDigits(base);

  return normalized === `${base}${expectedDigits}`;
}

export function formatCNPJ(value, options = {}) {
  if (!isValidCNPJ(value, options)) {
    return null;
  }

  const normalized = sanitize(value);

  return [
    normalized.slice(0, 2),
    ".",
    normalized.slice(2, 5),
    ".",
    normalized.slice(5, 8),
    "/",
    normalized.slice(8, 12),
    "-",
    normalized.slice(12, CNPJ_LENGTH)
  ].join("");
}

export function assertValidCNPJ(value, options = {}) {
  if (!isValidCNPJ(value, options)) {
    throw new TypeError("CNPJ invalido.");
  }

  return sanitize(value);
}

