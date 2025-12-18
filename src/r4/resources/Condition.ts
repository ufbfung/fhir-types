import type { DomainResource, CodeableConcept, Reference, Period } from "../datatypes";

export interface Condition extends DomainResource {
  resourceType: "Condition";
  clinicalStatus?: CodeableConcept;
  verificationStatus?: CodeableConcept;
  category?: CodeableConcept[];
  severity?: CodeableConcept;
  code?: CodeableConcept;
  subject: Reference;
  encounter?: Reference;

  onsetDateTime?: string;
  onsetPeriod?: Period;

  abatementDateTime?: string;
  abatementPeriod?: Period;

  recordedDate?: string;
  note?: Array<{ text: string; time?: string }>;
}
