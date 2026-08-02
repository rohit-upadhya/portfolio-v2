#!/usr/bin/env bash
# Scaffold a new dated blog post: scripts/new-post.sh "Post Title"
set -euo pipefail

if [ $# -eq 0 ]; then
  echo "usage: scripts/new-post.sh \"Post Title\"" >&2
  exit 1
fi

title="$1"
date="$(date +%Y-%m-%d)"
slug="$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr -cs 'a-z0-9' '-' | sed 's/^-//;s/-$//')"
dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
file="$dir/src/content/blog/${date}-${slug}.md"

if [ -e "$file" ]; then
  echo "already exists: $file" >&2
  exit 1
fi

mkdir -p "$(dirname "$file")"

cat > "$file" <<EOF
---
title: "$title"
date: $date
description: ""
# links:
#   - label: "paper"
#     href: "https://example.com"
---

EOF

echo "created $file"
