#!/bin/bash
set -euo pipefail

OUTPUT_FILE="public/data/rolling-images.json"
FORCE_GENERATE="${FORCE_ROLLING_IMAGES:-false}"

if [ -f "$OUTPUT_FILE" ] && [ "$FORCE_GENERATE" != "true" ]; then
  echo "rolling-images.json already exists, skipping..."
  exit 0
fi

mkdir -p public/data
cd scripts/rolling-images
npm install
npm run build
npx playwright install chromium
node dist/main.js "../../$OUTPUT_FILE"
