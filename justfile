default:
    @just --list

# Install the locked development dependencies
setup:
    bun install --frozen-lockfile
