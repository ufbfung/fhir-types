// Compile-time smoke test — no runtime execution

import type {
  Patient,
  Observation,
  Condition,
  AllergyIntolerance,
  Practitioner,
} from "./index";

// Basic discriminated-resource checks

const patient: Patient = {
  resourceType: "Patient",
};

const observation: Observation = {
  resourceType: "Observation",
  status: "final",
  code: { text: "Example" },
};

const condition: Condition = {
  resourceType: "Condition",
  subject: { reference: "Patient/123" },
};

const allergy: AllergyIntolerance = {
  resourceType: "AllergyIntolerance",
  patient: { reference: "Patient/123" },
};

const practitioner: Practitioner = {
  resourceType: "Practitioner",
};

// Prevent unused-variable removal
void patient;
void observation;
void condition;
void allergy;
void practitioner;
