<h1 align="center">Codinasion API</h1>

## API Routes

### 🌐 `/`

> List of all available API routes.

```json
// Sample response
[
  {
    "path": "/programs",
    "description": "List of programs"
  }
]
```

### 🌐 `/contributors`

> List of all contributors.

```json
// Sample response
[
  {
    "id": 54644599,
    "login": "harshraj8843",
    "name": "Harsh Raj"
  }
]
```

### 🌐 `/programs`

> List of all programs.

```json
// Sample response
[
  {
    "slug": "add-two-matrices",
    "title": "Add two matrices",
    "trackId": 4544,
    "tags": ["C"],
    "contributors": ["harshraj8843"],
    "latestUpdateDate": "2023-02-05T06:06:38Z"
  }
]
```

### 🌐 `/programs/:slug`

> Get program details.

```json
// Sample response
{
  "slug": "add-two-matrices",
  "title": "Add two matrices",
  "trackId": 4544,
  "tags": ["C"],
  "contributors": ["harshraj8843"],
  "contentHtml": "",
  "markdown": "",
  "latestUpdateDate": "2023-02-05T06:06:38Z"
}
```

### 🌐 `/programs/tags`

> List of all program tags.

```json
// Sample response
[
  {
    "name": "Python",
    "count": 194
  }
]
```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/.github/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

<br/>

<p align="center">
Made with 💖 by Codinasion
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/.github/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>
