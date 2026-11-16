Registered on Squarespace

## Project maintenance

Run `bin/setup` to prepare local knowledge search and Git hooks. It requires
Git, Python 3, and QMD, plus direnv when the project has an `.envrc`. Install
ShellCheck for checks.

Use `bin/check --documents-only` for Markdown changes, `bin/check` for
foundation static checks, and `bin/check --full` to add any application checks
listed in the [development workflow](docs/development-workflow.md).
Use `bin/doctor` to inspect setup. Keep application tools out of routine checks.

- [Memory](memory/README.md): durable project guidance and context.
- [Documents](docs/README.md): designs, decisions, research, and reference guides.
- [Git remotes](docs/git-remotes.md): existing hosts and fresh-clone push setup.
