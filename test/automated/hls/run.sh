#!/bin/bash

set -e

source ../tools.sh

function update_storage_config() {
  echo "Configuring external storage to use ${S3_BUCKET}..."

  # Hard coded to admin:abc123 for auth
  curl 'http://localhost:8080/api/admin/config/s3' \
  -H 'Authorization: Basic YWRtaW46YWJjMTIz' \
  --data-raw "{\"value\":{\"accessKey\":\"${S3_ACCESS_KEY}\",\"acl\":\"\",\"bucket\":\"${S3_BUCKET}\",\"enabled\":true,\"endpoint\":\"${S3_ENDPOINT}\",\"region\":\"${S3_REGION}\",\"secret\":\"${S3_SECRET}\",\"servingEndpoint\":\"\"}}"
}

TEMP_DB=$(mktemp)

# Install the node test framework
npm install --silent >/dev/null

ffmpegInstall

pushd ../../.. >/dev/null

# Build and run owncast from source
go build -o owncast main.go
./owncast -database "$TEMP_DB" &
SERVER_PID=$!

popd >/dev/null
sleep 5

# Start the stream.
../../ocTestStream.sh &
STREAMING_CLIENT=$!

function finish {
  echo "Cleaning up..."
  kill $SERVER_PID $STREAMING_CLIENT
  rm -fr "$TEMP_DB" "$FFMPEG_PATH"
}
trap finish EXIT

echo "Waiting..."
sleep 13

# Run tests against a fresh install with no settings.
npm test

# REMOVE this ONCE #2571 IS FIXED
exit 0

# Determine if we should continue testing with S3 configuration.
if [[ -z "${S3_BUCKET}" ]]; then
  echo "No S3 configuration set"
  exit 0
fi

# Kill the stream.
kill $STREAMING_CLIENT
sleep 5

# Update the server config to use S3 for storage.
update_storage_config

# start the stream.
../../ocTestStream.sh &
STREAMING_CLIENT=$!

echo "Waiting..."
sleep 13

# Re-run the HLS test against the external storage configuration.
npm test
