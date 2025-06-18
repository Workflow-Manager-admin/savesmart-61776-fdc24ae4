#!/bin/bash
cd /home/kavia/workspace/code-generation/savesmart-61776-fdc24ae4/save_smart
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

