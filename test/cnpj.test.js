import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

import {
  assertValid,
  assertValidCNPJ,
  calculateCheckDigits,
  calculateCNPJCheckDigits,
  format,
  formatCNPJ,
  isValid,
  isValidCNPJ,
  normalize,
  normalizeCNPJ
} from "../src/index.js";

const vectorCandidates = [
  new URL("../vectors/cnpj.json", import.meta.url),
  new URL("../../../vectors/cnpj.json", import.meta.url)
];

const vectorUrl = vectorCandidates.find((candidate) => existsSync(candidate));

if (!vectorUrl) {
  throw new Error("Vetores de teste do CNPJ nao encontrados.");
}

const vectors = JSON.parse(readFileSync(vectorUrl, "utf8"));

test("normaliza mascara e caixa", () => {
  assert.equal(normalizeCNPJ("12.abc.345/01de-35"), "12ABC34501DE35");
  assert.equal(normalize("12.abc.345/01de-35"), "12ABC34501DE35");
});

test("calcula os digitos do exemplo oficial da Receita", () => {
  assert.equal(calculateCNPJCheckDigits("12ABC34501DE"), "35");
  assert.equal(calculateCheckDigits("12ABC34501DE"), "35");
});

test("valida CNPJ alfanumerico oficial", () => {
  assert.equal(isValidCNPJ("12.ABC.345/01DE-35"), true);
  assert.equal(isValidCNPJ("12abc34501de35"), true);
});

test("valida CNPJ numerico legado", () => {
  assert.equal(isValidCNPJ("11.222.333/0001-81"), true);
  assert.equal(isValidCNPJ("11222333000181"), true);
});

test("rejeita DV invalido", () => {
  assert.equal(isValidCNPJ("12.ABC.345/01DE-36"), false);
  assert.equal(isValidCNPJ("11.222.333/0001-80"), false);
});

test("rejeita entradas invalidas", () => {
  assert.equal(isValidCNPJ(""), false);
  assert.equal(isValidCNPJ("123"), false);
  assert.equal(isValidCNPJ("11.111.111/1111-11"), false);
  assert.equal(isValidCNPJ(true), false);
  assert.equal(isValidCNPJ(null), false);
});

test("modo strict aceita apenas formato canonico", () => {
  assert.equal(isValidCNPJ("12.ABC.345/01DE-35", { strict: true }), true);
  assert.equal(isValidCNPJ("12ABC34501DE35", { strict: true }), true);
  assert.equal(isValidCNPJ("12#ABC#345/01DE-35", { strict: true }), false);
  assert.equal(isValidCNPJ("12#ABC#345/01DE-35"), true);
});

test("formata CNPJ valido", () => {
  assert.equal(formatCNPJ("12ABC34501DE35"), "12.ABC.345/01DE-35");
  assert.equal(formatCNPJ("11222333000181"), "11.222.333/0001-81");
  assert.equal(formatCNPJ("11222333000180"), null);
});

test("assertValidCNPJ retorna valor normalizado", () => {
  assert.equal(assertValidCNPJ("12.abc.345/01de-35"), "12ABC34501DE35");
  assert.equal(assertValid("12.abc.345/01de-35"), "12ABC34501DE35");
  assert.throws(() => assertValidCNPJ("12.ABC.345/01DE-36"), /CNPJ invalido/);
});

test("aliases genericos espelham a API explicita", () => {
  assert.equal(isValid("12.ABC.345/01DE-35"), true);
  assert.equal(format("12ABC34501DE35"), "12.ABC.345/01DE-35");
});

test("vetores compartilhados do hub permanecem validos", () => {
  for (const entry of vectors.valid) {
    assert.equal(isValid(entry.value), true, `esperado valido: ${entry.id}`);
    assert.equal(normalize(entry.value), entry.normalized, `normalizacao divergente: ${entry.id}`);
    assert.equal(format(entry.value), entry.formatted, `formatacao divergente: ${entry.id}`);
  }

  for (const entry of vectors.invalid) {
    assert.equal(isValid(entry.value), false, `esperado invalido: ${entry.id}`);
  }
});
