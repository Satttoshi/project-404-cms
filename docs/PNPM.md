# PNPM Guide

## Why PNPM for this Repo

PNPM is the recommended package manager for Turborepo projects:

- **Disk space efficiency**: Uses a content-addressable store to avoid duplicating dependencies
- **Faster installation**: Typically 2x faster than npm and yarn
- **Perfect for Turborepo**: Optimally works with Turborepo's caching and task scheduling
- **Strict dependencies**: Prevents accessing packages that aren't explicitly declared
- **First-class monorepo support**: Native workspace features that integrate seamlessly with Turborepo
- **Deterministic**: Generates reproducible node_modules across environments

## Installation

```bash
# Install globally using npm
npm install -g pnpm

# Using Homebrew for macOS
brew install pnpm

# Or using the official installer script
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

After installation, verify pnpm is properly installed:

```bash
pnpm --version
```
