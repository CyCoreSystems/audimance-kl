#!/bin/bash

pushd ${GOPATH}/src/github.com/CyCoreSystems/audimance
./build.sh
#go generate
#go build
#go install
popd
audimance -debug
