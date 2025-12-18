import type { DomainResource, HumanName, Identifier, Reference, Address, ContactPoint, CodeableConcept } from "../datatypes";
import type { FhirBoolean, FhirDate, FhirString } from "../primitives";

export interface Patient extends DomainResource {
  resourceType: "Patient";
  identifier?: Identifier[];
  active?: FhirBoolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: "male" | "female" | "other" | "unknown";
  birthDate?: FhirDate;
  deceasedBoolean?: FhirBoolean;
  deceasedDateTime?: string;
  address?: Address[];
  maritalStatus?: CodeableConcept;
  generalPractitioner?: Reference[];
  managingOrganization?: Reference;
}
