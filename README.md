# @ufbfung/fhir-types

Minimal, hand-rolled **HL7 FHIR R4** TypeScript types.

This package intentionally starts small and dependency-free, focusing on a clean,
ergonomic type surface that can grow incrementally over time. The long-term goal
is to support optional, transparent code generation — without sacrificing
readability or control.

> 📓 See [CHANGELOG.md](./CHANGELOG.md) for release notes and version history.

---

## Installation

```bash
npm install @ufbfung/fhir-types
```

---

## Usage

```ts
import type {
  Patient,
  Observation,
  Condition,
  AllergyIntolerance,
  Practitioner,
} from "@ufbfung/fhir-types";

const patient: Patient = {
  resourceType: "Patient",
  id: "123",
};

const observation: Observation = {
  resourceType: "Observation",
  status: "final",
  code: { text: "Heart rate" },
  valueQuantity: { value: 72, unit: "beats/min" },
};
```

All resources use `resourceType` as a discriminant, making them safe and ergonomic
to use in unions, type guards, and `switch` statements.

---

## Supported Resources

This package is intentionally **constrained**. Only explicitly supported
resources are exported and included in the public API.

Currently supported:

- `Patient`
- `Observation`
- `Condition`
- `AllergyIntolerance`
- `Practitioner`

These are also exposed via:

- `SUPPORTED_RESOURCE_TYPES`
- `SupportedResourceType`
- `SupportedResource`
- Runtime guards:
  - `isSupportedResourceType`
  - `isSupportedResource`
  - `assertSupportedResource`

This design allows downstream systems (e.g. FHIR servers, validators, ingestion
pipelines) to **fail fast** when encountering unsupported resource types.

---

## Profile-Aware Types (US Core)

In addition to base FHIR R4 resources, this package includes **profile-aware types**
for common U.S. implementation guides.

### US Core Patient

The package provides a strict `USCorePatient` type aligned with
**US Core Patient (STU6.1)**.

This type enforces key *cardinality constraints at compile time*:

- `identifier` → **required**, non-empty (1..*)
- `name` → **required**, non-empty (1..*)
- `gender` → **required** (1..1)
- `meta.profile` → **required**, must include the US Core Patient canonical URL

Example:

```ts
import type { USCorePatient } from "@ufbfung/fhir-types";

const patient: USCorePatient = {
  resourceType: "Patient",
  meta: {
    profile: ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"],
  },
  identifier: [{ system: "urn:mrn", value: "12345" }],
  name: [{ family: "Doe", given: ["Jane"] }],
  gender: "female",
};
```

If any required fields are missing, TypeScript will fail at author time — similar
to how SUSHI validates FHIR instances against profiles.

---

### Draft Construction Pattern

To support ergonomic, incremental object construction, a `DraftUSCorePatient` type
is also provided.

This pattern allows developers to build partial objects and then explicitly
confirm conformance when ready.

```ts
import type {
  DraftUSCorePatient,
  USCorePatient,
} from "@ufbfung/fhir-types";

const draft: DraftUSCorePatient = {
  resourceType: "Patient",
};

draft.identifier = [{ value: "12345" }];
draft.name = [{ family: "Doe", given: ["Jane"] }];
draft.gender = "female";
draft.meta = {
  profile: ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"],
};

const finalPatient = draft as USCorePatient;
```

Future versions may optionally replace this assertion with runtime validation.

---

## Shared Datatypes

A minimal but practical set of common FHIR datatypes is included, aligned with the
FHIR specification:

- `CodeableConcept`
- `Coding`
- `Identifier`
- `HumanName`
- `Reference`
- `Quantity`
- `Period`
- `Extension`
- `Element`
- Primitive wrappers (e.g. `FhirString`, `FhirDate`, etc.)

These datatypes are reused across all supported resources.

---

## Design Principles

- **Types-first, runtime-light**
- **No required runtime dependencies**
- **Incremental growth over full spec coverage**
- **Clear, auditable type definitions**
- **Generator-friendly file structure**
- **Explicitly scoped support**
- **Static enforcement of simple profile constraints (cardinality + profile identity)**

This is **not** a full FHIR SDK. It is a deliberately minimal foundation designed
to grow alongside real usage, not ahead of it.

---

## Roadmap (High-Level)

Planned or considered additions:

- More core R4 resources
- `AnySupportedResource` discriminated unions
- Explicit supported-version metadata
- Optional schema-driven generator
- Additional profile / Implementation Guide–aware types (e.g. US Core)
- Optional future runtime validators (e.g. invariants, slicing) layered on top

Breaking changes will be versioned conservatively.

---

## FHIR Version

- HL7 FHIR **R4 (4.0.1)**

---

## License

MIT
