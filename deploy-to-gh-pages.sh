#!/bin/bash

dir=DISC_CLONED
git clone https://github.com/teles/DISC.git $dir
cd $dir
git checkout master
sed --in-place '/bundle.js/d' .gitignore || exit 0
git rm bundle.js
cat ./.gitignore
npm install
npm run template-cache
npm run build
git add bundle.js
ls
git commit -m "Atualizando gh-pages via travis-ci"
git status
git push --force "${GH_REFERENCE}" master:gh-pages