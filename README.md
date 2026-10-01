# imbush.github.io

Personal site for Inle Bush — a small, hand-rolled Jekyll site.

## Structure

| Path                     | What it is                                                    |
| ------------------------ | ------------------------------------------------------------- |
| `index.html`               | Landing page: bio, link row, and the papers list               |
| `calendar.html`          | `/calendar/` — the embedded Boston event calendars            |
| `_data/calendars.yml`    | The calendars that page embeds — add or reorder here          |
| `_data/papers.yml`       | Publications — add new ones here, newest first                |
| `_layouts/default.html`  | The only layout (head, `<main>`, footer)                      |
| `assets/css/main.css`    | The only stylesheet (light only — see below)                  |
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

`/calendar/` embeds public Google Calendars in iframes — no plugin or API key, so it
works on GitHub Pages as-is. Each calendar is one entry in `_data/calendars.yml`:

```yaml
- heading: Neuroscience
  id: c_xxxxxxxx@group.calendar.google.com
```

The page derives the embed, agenda, subscribe, and add-to-calendar URLs from the `id`,
so adding a calendar is one entry. The calendar must be shared publicly ("make available
to public") or the embed shows visitors an error. Pages that set `wide: true` in their
front matter get a 1040px container instead of the 720px prose column.

## Theming

The site is light-only on purpose: the Google Calendar embeds on `/calendar/` always
render light and cannot be themed from outside the iframe, so a dark page left a glaring
white block. `:root` declares `color-scheme: light` and there is no
`prefers-color-scheme` query.

## SEO

`_layouts/default.html` emits per-page title, description, canonical, Open Graph, and
Twitter card tags; `share_image` in `_config.yml` sets the preview image. The home page
carries a `schema` block in its front matter that is emitted as JSON-LD `Person` data —
keep it in step with the bio. Images are served at display size; the hero photo is 800px
square, not the camera original.

The interactive data explorer at <https://imbush.github.io/data-vis/> lives in a
separate `data-vis` repository and is not affected by anything here.
