# @ufbfung/fhir-types

Minimal, hand-rolled **HL7 FHIR R4** TypeScript types.

This package intentionally starts small and dependency-free, focusing on a clean,
ergonomic type surface that can grow incrementally over time (and eventually
support custom code generation).

> See [CHANGELOG.md](./CHANGELOG.md) for release notes and version history.

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

All resources use `resourceType` as a discriminant, making them safe to use in
unions and switch statements.

---

## Included Resources (v0.0.1)

This initial release includes a minimal but practical core set:

- `Patient`
- `Observation`
- `Condition`
- `AllergyIntolerance`
- `Practitioner`

Common shared datatypes are also included, such as:

- `CodeableConcept`
- `Coding`
- `Identifier`
- `HumanName`
- `Reference`
- `Quantity`
- `Period`

---

## Design Principles

- **Types-only** (no runtime dependencies)
- **Minimal surface area**
- **Spec-aligned, not over-engineered**
- **Incremental growth over completeness**
- **Generator-friendly structure**

This is **not** a full replacement for the entire FHIR spec (yet). The goal is
to provide a solid foundation that is easy to understand, audit, and extend.

---

## Roadmap (High Level)

Planned future additions may include:

- Additional core resources
- `AnyResource` discriminated union
- Explicit FHIR version metadata
- Optional generator for resource shells
- Profile- or IG-aware type generation

Breaking changes will be versioned carefully.

---

## FHIR Version

- HL7 FHIR **R4 (4.0.1)**

---

## License

MIT
