## Develop

```
npm run develop
```

## Build

```
npm i -g gatsby-cli
gatsby build
```

## Test production build locally

```
npm i -g gatsby-cli
gatsby build
```

## Upload to AWS S3

Serving from root of bucket.

```
aws s3 cp ./public s3://<AWS_S3_BUCKET> \
    --recursive \
    --exclude '*.DS_Store' \
    --profile <AWS_PROFILE> \
    [--acl public-read]
```
