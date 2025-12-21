# Changelog

All notable changes to this project will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

---

## [0.0.4] – 2025-12-21

### Added
- **US Core Patient profile support (STU6.1)**:
  - `USCorePatient` type enforcing key US Core cardinality constraints at compile time
    - `identifier` is required and non-empty (1..*)
    - `name` is required and non-empty (1..*)
    - `gender` is required (1..1)
    - `meta.profile` is required and must include the US Core Patient canonical URL
  - `DraftUSCorePatient` helper type for ergonomic incremental construction

- **Profile-aware typing philosophy**:
  - Static types enforce *simple, high-signal constraints* (cardinality, profile identity)
  - More complex constraints (invariants, slicing, bindings) intentionally deferred to future runtime validation

### Changed
- `Extension` and `Element` moved from primitives to shared datatypes
  - Aligns with the HL7 FHIR specification (Extension is a datatype, not a primitive)
  - Improves typing for `DomainResource.extension` and `modifierExtension`

- `DomainResource.extension` and `modifierExtension` are now typed as `Extension[]`
  instead of `any[]`

### Notes
- This release intentionally focuses on **early developer feedback** via static typing.
- US Core support is profile-specific and does **not** introduce new FHIR `resourceType` values.
- Runtime validation (e.g. invariants, slicing) is explicitly out of scope for this version.

## [0.0.3] – 2025-12-18

### Added
- `SUPPORTED_RESOURCE_TYPES` as a single source of truth for supported FHIR resources
- `SupportedResourceType` and `SupportedResource` union types
- Runtime guards:
  - `isSupportedResourceType`
  - `isSupportedResource`
  - `assertSupportedResource`

### Notes
- This enables downstream FHIR servers to strictly constrain supported resource types.
- Designed to be generator-friendly for future automation.

---

## [0.0.2] – 2025-12-18

### Added
- MIT license
- Expanded README with usage examples and design goals

---

## [0.0.1] – 2025-12-18

### Added
- Initial release
- Core FHIR R4 resource types:
  - Patient
  - Observation
  - Condition
  - AllergyIntolerance
  - Practitioner
