$ErrorActionPreference = 'Continue'
Set-Location (Join-Path $PSScriptRoot '..')

# Pass 1: chew through whatever is already on disk (modest concurrency so the
# still-running image mirror keeps its network throughput)
node _tools\webp-convert.mjs --concurrency 5 *>> _tools\webp-run.log

# Pass 2: block until the mirror background job (PID passed in) exits, then do
# a full-rate final sweep over everything it downloaded. If the PID is already
# gone or was never valid, Wait-Process throws and we just proceed.
try { Wait-Process -Id $args[0] -ErrorAction Stop } catch {}

node _tools\webp-convert.mjs *>> _tools\webp-run.log

"chain complete $(Get-Date -Format s)" *>> _tools\webp-run.log
