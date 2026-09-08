# imbush.github.io

Personal site for Inle Bush — a small, hand-rolled Jekyll site.

## Structure

| Path                     | What it is                                                    |
| ------------------------ | ------------------------------------------------------------- |
| `index.html`               | Landing page: bio, link row, and the papers list               |
| `calendar.html`          | `/calendar/` — the embedded Boston neuroscience calendar      |
| `_data/papers.yml`       | Publications — add new ones here, newest first                |
| `_layouts/default.html`  | The only layout (head, `<main>`, footer)                      |
| `assets/css/main.css`    | The only stylesheet, with light and dark palettes             |
| `_config.yml`            | Name, email, and the URLs used by the link row                |

## Adding a paper

Append an entry to the top of `_data/papers.yml`:

```yaml
- title: "Paper title"
  authors: "First Author, Inle Bush, Last Author"
  venue: "Journal 12(3)"
  year: 2026
  links:
    - name: paper
      url: https://doi.org/...
```

`Inle Bush` is bolded automatically wherever it appears in `authors`, and the
first link is used for the title's hyperlink.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```

Pushing to `master` builds the site and publishes `_site` to the `gh-pages`
branch via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## The calendar page

`/calendar/` embeds a public Google Calendar in an iframe — no plugin or API key, so
it works on GitHub Pages as-is. The calendar is set by `boston_calendar_id` in
`_config.yml`; the page derives the embed, agenda, subscribe, and add-to-calendar URLs
from it. Pages that set `wide: true` in their front matter get a 1040px container
instead of the 720px prose column.

The interactive data explorer at <https://imbush.github.io/data-vis/> lives in a
separate `data-vis` repository and is not affected by anything here.
