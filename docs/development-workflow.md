---
status: current
---

# Development workflow

This page records this project's own commands and integrations. Shared rules
are in the [foundation pages](foundation/README.md).

## Setup

```sh
bin/setup
bin/doctor
bin/check --full
```

Setup needs Git and Python 3.9 or later, and checks also need ShellCheck.
QMD and direnv are optional; setup reports skipped features.
Create `.envrc` only when the project needs environment settings, and review
it before running `direnv allow`; search does not need it.

## Project commands and boundaries

This is a static HTML/CSS/JavaScript site with no application build or test
command. Review changed site pages in a browser when changing their content
or behavior; foundation checks do not establish visual correctness.

GitHub Pages publishes the root of `master`. The [Jekyll configuration](../_config.yml)
excludes maintenance instructions, tools, knowledge, tests, and worktrees from
the public website, while retaining the normal dependency exclusions. Keep
these boundaries when adding site content. See Jekyll's
[configuration options](https://jekyllrb.com/docs/configuration/options/).

## Checks

Follow the [check schedule](foundation/engineering-policy.md#checks). The
project has no application checks and no `bin/check-application`, so
`bin/check --full` runs only the foundation checks.

GitHub validation is defined in [the workflow](../.github/workflows/check.yml),
which runs `bin/check --full` on pull requests and pushes to `master`, except
when every changed file is Markdown. The [hosted CI
rules](foundation/engineering-policy.md#hosted-ci) cover that case. Full CI
success must be checked for the delivered revision; a local pass does not
establish a remote result.

## Runtime and toolchain versions

The site has no build step or application runtime. GitHub Pages builds it
with its own managed Jekyll version. Foundation checks need Python 3.9 or
later and ShellCheck; CI runs them on the GitHub-hosted `ubuntu-latest` runner.

## Deployment

GitHub Pages builds from the `master` branch root and publishes every push to
`jubishop.com`; there is no separate deployment step or skip mechanism.
The Jekyll configuration above excludes agent instructions, tools, and
knowledge pages from the published site, so pushing changes to them
republishes the same site. To republish without a new commit, request a Pages
build from the repository settings.

## Project Starter

`.project-starter.json` records the installed Project Starter release and the
hashes of its managed files. Update them with Project Starter's `bin/sync`,
and record any intentional local change as an override with its reason.
