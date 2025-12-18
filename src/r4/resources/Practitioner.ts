import type { DomainResource, HumanName, Identifier, Address, ContactPoint, CodeableConcept } from "../datatypes";
import type { FhirBoolean } from "../primitives";

export interface Practitioner extends DomainResource {
  resourceType: "Practitioner";
  identifier?: Identifier[];
  active?: FhirBoolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  address?: Address[];
  gender?: "male" | "female" | "other" | "unknown";
  qualification?: Array<{
    identifier?: Identifier[];
    code: CodeableConcept;
    period?: { start?: string; end?: string };
    issuer?: { reference?: string; display?: string };
  }>;
}
