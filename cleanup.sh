#!/usr/bin/env bash
set -e

if [ -f .env ]; then
  set -a
  . ./.env
  set +a
fi

API_URL="https://ephemeral-protected.api.$ENVIRONMENT.cdp-int.defra.cloud/ahwr-application-backend"
API_KEY="${API_KEY:-}"

SBIS="sbi=106821850" # to add more, keep adding add &sbi=

CURL_OPTS=(-s -w "%{http_code}")

# Add API key header only when running locally
if [ "$RUN_ENVIRONMENT" = "local" ]; then
  CURL_OPTS+=(-H "x-api-key: $API_KEY")
fi

HTTP_STATUS=$(curl "${CURL_OPTS[@]}" -X DELETE "${API_URL}/api/cleanup?${SBIS}")

if [ "$HTTP_STATUS" -ne 204 ]; then
  echo "Cleanup failed (HTTP $HTTP_STATUS)"
  exit 1
fi

echo "Cleanup completed successfully"
