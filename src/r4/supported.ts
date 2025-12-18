import type { Patient } from "./resources/Patient";
import type { Observation } from "./resources/Observation";
import type { Condition } from "./resources/Condition";
import type { AllergyIntolerance } from "./resources/AllergyIntolerance";
import type { Practitioner } from "./resources/Practitioner";

/**
 * Single source of truth for what this package currently supports.
 * Keep this list in sync as you add new resource files (or later: generate it).
 */
export const SUPPORTED_RESOURCE_TYPES = [
  "Patient",
  "Observation",
  "Condition",
  "AllergyIntolerance",
  "Practitioner",
] as const;

export type SupportedResourceType = (typeof SUPPORTED_RESOURCE_TYPES)[number];

/**
 * Union of supported resource shapes.
 * (Add new types here as you expand support.)
 */
export type SupportedResource =
  | Patient
  | Observation
  | Condition
  | AllergyIntolerance
  | Practitioner;

/** Internal: O(1) membership checks */
const SUPPORTED_RESOURCE_TYPE_SET: ReadonlySet<string> = new Set(
  SUPPORTED_RESOURCE_TYPES
);

/** Narrow unknown to SupportedResourceType */
export function isSupportedResourceType(
  x: unknown
): x is SupportedResourceType {
  return typeof x === "string" && SUPPORTED_RESOURCE_TYPE_SET.has(x);
}

/**
 * Safely extract a resourceType string from unknown input.
 * Useful in servers before doing deeper validation.
 */
export function getResourceType(x: unknown): string | undefined {
  if (!x || typeof x !== "object") return undefined;
  const rt = (x as any).resourceType;
  return typeof rt === "string" ? rt : undefined;
}

/** Narrow unknown to SupportedResource based on resourceType presence */
export function isSupportedResource(x: unknown): x is SupportedResource {
  const rt = getResourceType(x);
  return rt !== undefined && isSupportedResourceType(rt);
}

/**
 * Assert helper: throws a helpful error instead of returning boolean.
 * Handy in server routes.
 */
export function assertSupportedResource(
  x: unknown
): asserts x is SupportedResource {
  const rt = getResourceType(x);

  if (!rt) {
    throw new Error("Invalid resource: missing or non-string `resourceType`.");
  }
  if (!isSupportedResourceType(rt)) {
    throw new Error(
      `Unsupported resourceType: ${rt}. Supported: ${SUPPORTED_RESOURCE_TYPES.join(
        ", "
      )}`
    );
  }
}
