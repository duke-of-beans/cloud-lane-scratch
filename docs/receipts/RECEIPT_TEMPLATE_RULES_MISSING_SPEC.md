# Receipt template rules: missing_spec kickbacks

Opened as the source artifact for the missing_spec corrective actions (wo-20261012-dc59c842 gregore, wo-20261008-576b4f73 cloud-lane-scratch). Applies to every receipt and production order. Review-by: 90 days after this action verifies.

## Why

Four kickbacks in gregore were classed `missing_spec`. In every one the receipt named a deliverable, the worker improvised an **additive** change to fill a gap the spec left open, and the reviewer flagged the improvisation as a spec defect — then accepted it because the change was correct and merged green. The receipt did not say what the worker was allowed to decide on its own.

| Order | What happened | Rule |
|---|---|---|
| wo-20261009-34ea7356 | Receipt said "GANGLION ships with the dispatch's order id". Worker added an optional `orderId` field to `ShipInput`/`WorkOrder` and threaded it through. Reviewer: spec never said the field was optional. | M1 |
| wo-20261009-de8d3b7a | Receipt said "P1 money guards in the effector". Worker added an optional `stderr` field to `InstallResult` so a preflight failure could surface the npm tail. Reviewer: not in the spec. | M1 |
| wo-20261009-196afd6d | Receipt said "Shepherd never merges without a passing gate run". Worker added an optional `requireGate` arg to bypass the gate for the bootstrap PR. Reviewer: spec didn't name the exception. | M2 |
| wo-20261009-0c831ccd | Receipt said "every dispatch's cost lands in spend_tracking". Worker added an optional `client` arg to `recordUsage` for spec injection. Reviewer: not in the spec. | M1 |

The cloud-lane-scratch orders (wo-20261006-5b641620, wo-20261006-8d07bada, wo-20261008-f092a8f4) are sandbox plants for W5b acceptance, not real work; the same rule below governs them.

## Rules

**M1. State what the worker may decide.** A receipt that names a deliverable also states the latitude the worker has on the shape of the change: which fields, arguments or signatures it may add, and which are fixed by the spec. If a field is optional, the receipt says so. An improvisation the receipt did not authorize is a miss even when it is correct.

**M2. Name the exceptions to the rule.** A receipt that states a rule ("never merge without a gate") also names every exception ("except the gate-bootstrap PR") in the same sentence. An exception the worker invents is a miss even when it is necessary.

**M3. A correct improvisation is still a spec miss.** "It merged green and the change stands" is not an answer to a missing_spec kickback. The kickback records that the receipt failed to bind the worker; the fix is to the receipt, not a defense of the change.

## Applying it

Before a receipt or production order goes out, answer three questions in the body:

1. **Shape.** Which fields, arguments, signatures or files is the worker free to add, and which are fixed? If an addition is optional, say "optional" and say why it exists.
2. **Exceptions.** Does the receipt state a rule with no exception? Name the exception in the same sentence, or state that there is none.
3. **Boundary.** If the worker finds a gap the spec does not cover, is it allowed to fill it, or must it stop and kick back? Say which. Silence reads as permission, and permission the receipt never granted is a miss.

## Check

The action closes only when the project's missing_spec kickback rate over the next 10 orders falls below baseline. A rule that never prevents a kickback is pruned at review-by.

## Related

`docs/receipts/RECEIPT_TEMPLATE_RULES.md` covers the `environment` class (R1–R5); `docs/receipts/RECEIPT_TEMPLATE_RULES_WORKER_ERROR.md` covers `worker_error` (W1–W4). This document covers `missing_spec` (M1–M3). The three are complementary: R governs what the receipt *declares*, W governs what it *requires*, M governs what it *permits*.
