# `@themaxdavitt/riot-games-apis`

[![NPM link](https://img.shields.io/npm/v/@themaxdavitt/riot-games-apis?style=flat-square)](https://npmjs.com/package/@themaxdavitt/riot-games-apis) [![Package license](https://img.shields.io/npm/l/@themaxdavitt/riot-games-apis?style=flat-square)](https://github.com/themaxdavitt/riot-games-apis/blob/main/LICENSE) 

Auto-generated [`axios`](https://www.npmjs.com/package/axios)-powered Typescript Riot Games API client.

## Building

We use [`MingweiSamuel/riotapi-schema`](https://github.com/MingweiSamuel/riotapi-schema) to generate an OpenAPI 3.0 definition, and then feed it into 
[`openapi-client-axios`](https://www.npmjs.com/package/openapi-client-axios) and [`openapi-client-axios-typegen`](https://www.npmjs.com/package/openapi-client-axios-typegen). That's it.

We do this automatically in `npm run build` before publishing. Just sit back and relax.

## Documentation

After building, HTML documentation is generated in a `docs/` folder. You can access it at `node_modules/@themaxdavitt/riot-games-apis/docs/index.html` or [online](https://themaxdavitt.github.io/game-apis/riot-games-apis/).

## Versioning

We're following a [SemVer](https://semver.org/)-compatible version of [CalVer](https://calver.org/) (equivalent to `date +0.%Y.%-j`) since we have no idea when Riot will update their APIs.

## License

`@themaxdavitt/riot-games-apis` is released under [the MIT license](LICENSE).
