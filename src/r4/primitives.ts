// removing extension and element from primitives as that's not semantically correct. Moving to datatypes
// export interface Extension {
//   url: string;
//   valueString?: string;
//   valueBoolean?: boolean;
//   valueInteger?: number;
//   valueDecimal?: number;
//   valueDate?: string;
//   valueDateTime?: string;
//   valueCode?: string;
//   valueUri?: string;
// }

// export interface Element {
//   id?: string;
//   extension?: Extension[];
// }

/**
 * Minimal primitive wrappers (FHIR primitives are JSON scalars, with optional _element)
 * We'll model the scalar values directly, and support underscore fields where needed.
 */
export type FhirId = string;
export type FhirUri = string;
export type FhirCode = string;
export type FhirDate = string;     // YYYY-MM-DD
export type FhirDateTime = string; // ISO 8601
export type FhirInstant = string;  // ISO 8601
export type FhirBoolean = boolean;
export type FhirInteger = number;
export type FhirDecimal = number;
export type FhirString = string;
