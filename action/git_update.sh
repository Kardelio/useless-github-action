#!/usr/bin/env bash

VERSION=""


echo "Yeh"
while getopts v: flag
do
    case "${flag}" in
        v) 
            VERSION=${OPTARG}
            ;;
        esac
done

echo "---------------${VERSION}"
NEWTAG="1.2.3"


echo ::set-output name=new-version::$NEWTAG
exit 0