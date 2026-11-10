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

The site has no local build step or application runtime. The Pages workflow
builds it with `actions/jekyll-build-pages`, which uses GitHub Pages' managed
Jekyll version. Foundation checks need Python 3.9 or later and ShellCheck; CI
runs them on the GitHub-hosted `ubuntu-latest` runner.

## Deployment

[The Pages workflow](../.github/workflows/pages.yml) builds the `master`
branch root with Jekyll and deploys it to `jubishop.com` on every push to
`master`. On pull requests it only builds, so a change that breaks the Jekyll
build fails before it merges. The repository's Pages source must be set to
GitHub Actions, not to a branch.

The workflow replaced GitHub's built-in branch build on 2026-11-09. GitHub's
Pages service sometimes fails a deployment with "Deployment failed, try again
later." although the build succeeded, as it did on 2026-11-06 and
2026-11-09, and the built-in build has no way to retry. A rerun 13 and 25
minutes later passed each time. The deploy job therefore tries again after
two minutes and then after ten more, and fails only when all three attempts
fail.

A commit with `[skip ci]` in its message, such as a Project Starter sync,
starts no Pages run and is published with the next push. The Jekyll
configuration above excludes agent instructions, tools, and knowledge pages
from the published site, so such commits need no deployment. To deploy without
a new commit, run the Pages workflow on `master` from the repository's Actions
tab or with `gh workflow run pages.yml --ref master`.

## Project Starter

`.project-starter.json` records the installed Project Starter release and the
hashes of its managed files. Update them with Project Starter's `bin/sync`,
and record any intentional local change as an override with its reason.
