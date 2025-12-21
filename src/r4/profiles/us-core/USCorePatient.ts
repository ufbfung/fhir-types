import type { Patient } from "../../resources/Patient";
import type { Identifier, HumanName } from "../../datatypes";
import type { FhirUri } from "../../primitives";

export const US_CORE_PATIENT_PROFILE: FhirUri =
  "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient";

type NonEmptyArray<T> = [T, ...T[]];

/**
 * US Core Patient (MVP)
 *
 * Static guarantees:
 * - meta.profile includes the US Core Patient canonical URL
 * - identifier is 1..* (non-empty array)
 * - name is 1..* (non-empty array)
 * - gender is 1..1
 *
 * Out of scope for static typing (future runtime validation):
 * - invariants
 * - slicing requirements
 * - value set binding strength nuances
 * - Must Support expectations
 */
export type USCorePatient =
  Omit<Patient, "meta" | "identifier" | "name" | "gender"> & {
    meta: NonNullable<Patient["meta"]> & {
      profile: [typeof US_CORE_PATIENT_PROFILE, ...FhirUri[]];
    };

    identifier: NonEmptyArray<Identifier>;
    name: NonEmptyArray<HumanName>;
    gender: NonNullable<Patient["gender"]>;
  };

/**
 * Draft builder type for dev UX.
 * - Lets you incrementally build a USCorePatient
 * - When ready, you can validate later (runtime) or assert/cast
 */
export type DraftUSCorePatient =
  Partial<USCorePatient> & Pick<USCorePatient, "resourceType">;
