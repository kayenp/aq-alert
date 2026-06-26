# Claude Code Guidelines

## Explaining Code Behavior

### Specificity
When explaining a behavior, always specify whether it is specific to the particular function/component being discussed or whether it applies to a general class of code (e.g., all async functions, all hooks, all transitions). If a behavior applies generally, say so explicitly, even if the question was about a specific function.

### In-Context and General Explanations
When explaining the behavior of code, cover two scopes:

1. **In your code** — what's happening in the specific context of the user's file
2. **In general** — how it behaves in other circumstances

These must be visually separated (e.g., with headers or line breaks), not blended together.

### Content
All summaries added to this file are instructions for Claude Code. Do not add educational content, general framework knowledge, or learning notes — only project-specific instructions and behavioral rules.
