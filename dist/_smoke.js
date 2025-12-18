// Compile-time smoke test — no runtime execution
// Basic discriminated-resource checks
const patient = {
    resourceType: "Patient",
};
const observation = {
    resourceType: "Observation",
    status: "final",
    code: { text: "Example" },
};
const condition = {
    resourceType: "Condition",
    subject: { reference: "Patient/123" },
};
const allergy = {
    resourceType: "AllergyIntolerance",
    patient: { reference: "Patient/123" },
};
const practitioner = {
    resourceType: "Practitioner",
};
// Prevent unused-variable removal
void patient;
void observation;
void condition;
void allergy;
void practitioner;
export {};
