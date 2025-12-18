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
- runtime type guards (`isSupportedResource`, `isSupportedResourceType`)

This design allows downstream systems (e.g. FHIR servers, validators, ingestion
pipelines) to **fail fast** when encountering unsupported resource types.

---

## Shared Datatypes

A minimal but practical set of common FHIR datatypes is included:

- `CodeableConcept`
- `Coding`
- `Identifier`
- `HumanName`
- `Reference`
- `Quantity`
- `Period`
- Primitive wrappers (e.g. `FhirString`, `FhirDate`, etc.)

These are reused across all supported resources.

---

## Design Principles

- **Types-first, runtime-light**
- **No required runtime dependencies**
- **Incremental growth over full spec coverage**
- **Clear, auditable type definitions**
- **Generator-friendly file structure**
- **Explicitly scoped support**

This is **not** a full FHIR SDK. It is a deliberately minimal foundation designed
to grow alongside real usage, not ahead of it.

---

## Roadmap (High-Level)

Planned or considered additions:

- More core R4 resources
- `AnySupportedResource` discriminated unions
- Explicit supported-version metadata
- Optional schema-driven generator
- Profile / Implementation Guide–aware extensions

Breaking changes will be versioned conservatively.

---

## FHIR Version

- HL7 FHIR **R4 (4.0.1)**

---

## License

MIT
