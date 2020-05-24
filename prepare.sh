#!/bin/bash
cp -r core/dist build/
cp -r core/loader build/
cp core/src/shared/variables.css build/
# copy the entire folder but change it's name
cp -r react/dist/ build/react
