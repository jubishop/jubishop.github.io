---
status: current
---

# Git remotes

This project already uses GitHub for fetching and a second SourceHut push
destination. Preserve the existing hosts, visibility, and branch settings.

| Remote | URL |
| --- | --- |
| Primary (`origin`) | `git@github.com:jubishop/jubishop.github.io.git` |
| Secondary (`sourcehut`) | `git@git.sr.ht:~jubi/jubishop.github.io` |

## Restore a fresh clone

Inspect `git remote -v` and `git remote get-url --push --all origin` first.
In a fresh clone with only the primary origin URL, configure:

```sh
git remote add sourcehut git@git.sr.ht:~jubi/jubishop.github.io
git remote set-url --add --push origin git@github.com:jubishop/jubishop.github.io.git
git remote set-url --add --push origin git@git.sr.ht:~jubi/jubishop.github.io
git config --local remote.pushDefault origin
git config --local push.autoSetupRemote true
```

Add only missing remotes and URLs when repeating setup. Ordinary `git push`
updates both destinations; fetching and pulling still use GitHub. The two
pushes are separate operations, so inspect both results and retry failures.
Verify the intended branch revision independently on each host after pushing.

SourceHut is intended as a private secondary repository. Check its authenticated
settings before a first upload from a replacement environment; local remote
configuration does not prove remote visibility. Foundation setup neither
creates hosted repositories nor changes their visibility.
