import type { DomainResource, CodeableConcept, Reference, Annotation } from "../datatypes";
export interface AllergyIntolerance extends DomainResource {
    resourceType: "AllergyIntolerance";
    clinicalStatus?: CodeableConcept;
    verificationStatus?: CodeableConcept;
    type?: "allergy" | "intolerance";
    category?: Array<"food" | "medication" | "environment" | "biologic">;
    criticality?: "low" | "high" | "unable-to-assess";
    code?: CodeableConcept;
    patient: Reference;
    recordedDate?: string;
    note?: Annotation[];
    reaction?: Array<{
        substance?: CodeableConcept;
        manifestation: CodeableConcept[];
        description?: string;
        onset?: string;
        severity?: "mild" | "moderate" | "severe";
    }>;
}
