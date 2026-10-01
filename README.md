Registered on Squarespace

## Project maintenance

Run `bin/setup` to prepare local knowledge search and Git hooks. It requires
Git and Python 3.9 or later; QMD and direnv are optional. Install ShellCheck
for checks. Follow the [task workflow](docs/task-tracking.md) to initialize td.

Use `bin/check --documents-only` for Markdown changes, `bin/check` for
foundation static checks, and `bin/check --full` for foundation behavior tests
and the project checks listed in the [development workflow](docs/development-workflow.md).
Use `bin/doctor` to inspect setup. Keep application tools out of routine checks.

- [Memory](memory/README.md): durable project guidance and context.
- [Documents](docs/README.md): designs, decisions, research, and reference guides.
- [Git remotes](docs/git-remotes.md): existing hosts and fresh-clone push setup.
