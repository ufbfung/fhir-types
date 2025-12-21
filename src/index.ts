export * from "./r4/primitives";
export * from "./r4/datatypes";

// Base FHIR R4 resources
export * from "./r4/resources/Patient";
export * from "./r4/resources/Observation";
export * from "./r4/resources/Condition";
export * from "./r4/resources/AllergyIntolerance";
export * from "./r4/resources/Practitioner";

// Profiles
export * from "./r4/profiles/us-core/USCorePatient";

// Scope types to only what's supported to incrementally build this package
export * from "./r4/supported";
