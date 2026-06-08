# Architecture Decision Records

This directory records significant architecture decisions for the SPFx parquet viewer,
using a lightweight [MADR](https://adr.github.io/madr/)-style format.

Each ADR captures the context, the decision, its consequences, and the alternatives
considered, so the reasoning survives even when the code changes.

| ADR | Title | Status |
|-----|-------|--------|
| [0001](0001-data-access-and-analytics.md) | Data access and analytics architecture | Partially implemented |

## Conventions

- Files are numbered `NNNN-kebab-title.md`.
- A decision is never deleted; if reversed, mark it **Superseded by ADR-XXXX** and add a new record.
- Each decision inside a record carries its own status when one ADR spans several related decisions.
