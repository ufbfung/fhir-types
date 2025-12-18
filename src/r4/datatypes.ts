import type { Element, FhirCode, FhirDate, FhirInstant, FhirDateTime, FhirDecimal, FhirId, FhirString, FhirUri } from "./primitives";

export interface Meta {
  versionId?: FhirId;
  lastUpdated?: FhirInstant;
  profile?: FhirUri[];
  tag?: Coding[];
}

export interface Coding {
  system?: FhirUri;
  version?: FhirString;
  code?: FhirCode;
  display?: FhirString;
  userSelected?: boolean;
}

export interface CodeableConcept {
  coding?: Coding[];
  text?: FhirString;
}

export interface Identifier {
  use?: "usual" | "official" | "temp" | "secondary" | "old";
  type?: CodeableConcept;
  system?: FhirUri;
  value?: FhirString;
}

export interface HumanName {
  use?: "usual" | "official" | "temp" | "nickname" | "anonymous" | "old" | "maiden";
  text?: FhirString;
  family?: FhirString;
  given?: FhirString[];
  prefix?: FhirString[];
  suffix?: FhirString[];
}

export interface ContactPoint {
  system?: "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other";
  value?: FhirString;
  use?: "home" | "work" | "temp" | "old" | "mobile";
  rank?: number;
}

export interface Address {
  use?: "home" | "work" | "temp" | "old" | "billing";
  type?: "postal" | "physical" | "both";
  line?: FhirString[];
  city?: FhirString;
  district?: FhirString;
  state?: FhirString;
  postalCode?: FhirString;
  country?: FhirString;
}

export interface Reference {
  reference?: FhirString; // "Patient/123"
  type?: FhirUri;         // "Patient"
  identifier?: Identifier;
  display?: FhirString;
}

export interface Period {
  start?: FhirDateTime;
  end?: FhirDateTime;
}

export interface Quantity {
  value?: FhirDecimal;
  unit?: FhirString;
  system?: FhirUri;
  code?: FhirCode;
}

export interface Range {
  low?: Quantity;
  high?: Quantity;
}

export interface Annotation {
  authorString?: FhirString;
  time?: FhirDateTime;
  text: FhirString;
}

/** Base resource types */
export interface Resource {
  resourceType: string;
  id?: FhirId;
  meta?: Meta;
  implicitRules?: FhirUri;
  language?: FhirCode;
}

export interface DomainResource extends Resource {
  text?: Narrative;
  contained?: Resource[];
  extension?: any[]; // keep ultra-minimal for MVP
  modifierExtension?: any[];
}

export interface Narrative {
  status: "generated" | "extensions" | "additional" | "empty";
  div: string; // XHTML string
}
