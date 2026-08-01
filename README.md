# udaykishore-resu.github.io

The live GitHub Pages site for udaykishore-resu.github.io, Udaykishore Resu's personal portfolio.

This repo holds the built, static output of the portfolio, not its source code. The source lives in a separate (private) repo, uday-kishore-folio, built with Vite, React, TypeScript, and shadcn-ui.

## How it's deployed

deploy.sh builds the portfolio from the source repo and copies the compiled output here:

```bash
cd ../uday-kishore-folio
npm install
npm run build

# Copy the built files into this repo
cp -r dist/* ../udaykishore-resu.github.io/

cd ../udaykishore-resu.github.io
git add .
git commit -m "updated dist"
git push origin main
```

Pushing to main triggers GitHub Pages to publish the contents of this repo.

## Structure

index.html and assets/ are the built site. robots.txt sets search engine crawl rules. deploy.sh pulls a fresh build from the source repo and publishes it here.

There's nothing to install or run locally in this repo, it's a deploy target, not a dev environment. To work on the site itself, go to the uday-kishore-folio source repo.
