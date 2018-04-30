#!/bin/bash

pushd ${GOPATH}/src/github.com/CyCoreSystems/audimance
go generate
go build
go install
popd
audimance
