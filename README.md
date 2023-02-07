<h1 align="center">Codinasion API</h1>

## API Routes

### 🌐 `/api`

> List of all available API routes.

```json
// Sample response
[
  {
    "path": "/api/program",
    "description": "List of programs"
  }
]
```

### 🌐 `/api/program`

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

### 🌐 `/api/program/:slug`

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
