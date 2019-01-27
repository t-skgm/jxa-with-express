# JXA with Express example

## install

```bash
$ yarn
```

## run

```bash
$ yarn start
```

```bash
$ curl http://localhost:3000/username
{"username":"t-skgm"}

$ curl -s http://localhost:3000/track | jq . # with iTunes playing a song
{
  "title": "Dynamo",
  "trackNumber": 1,
  "albumArtist": "Ariel Kill Him",
  "artist": "Ariel Kill Him",
  "album": "Alpha Is Down",
  "releaseDate": "2002-02-18T08:00:00.000Z",
  "year": 2002,
  "duration": 218.1320037841797
}
```
