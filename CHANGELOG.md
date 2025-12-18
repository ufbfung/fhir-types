# Changelog

All notable changes to this project will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

---

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
