# remix-template

A remix template from the remix [Quick Start](https://remix.run/docs/en/main/start/quickstart).

Intended to use with [degit](https://github.com/Rich-Harris/degit), e.g. `degit mbrezu/remix-template my-remix app`.

## Usage

### Development

1. Install with `npm i`
2. Optionally typecheck with `npm typecheck`
3. Run in developer mode with `npm run dev`

### Production

1. Build with `npm run build`
2. Run in production with `npm run start`

## Docker

Use the include `Dockerfile` as a starting point in building a container with a production build of the current project.
Use the included `docker-compose.yml` for local tests with `docker-compose`.