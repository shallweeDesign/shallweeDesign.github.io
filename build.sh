#!/bin/bash
ROOT="$(dirname "$0")"
SASS="$HOME/dart-sass/sass"
echo "🔨 Compiling SCSS..."
$SASS "$ROOT/assets/scss/page-home.scss" "$ROOT/assets/css/home.css" --no-source-map --quiet
$SASS "$ROOT/assets/scss/page-lab.scss"  "$ROOT/assets/css/lab.css"  --no-source-map --quiet
echo "✅ Done"
