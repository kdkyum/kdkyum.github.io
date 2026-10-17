# kdkyum.github.io

Source for [kdkyum.github.io](https://kdkyum.github.io), the homepage of Dong-Kyum Kim.

It is a small [Jekyll](https://jekyllrb.com) site with two pages. Papers come from a BibTeX file through [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar), and news comes from one Markdown file per item.

## Files

```
index.html                     Homepage: bio, research, news, selected papers, contact
publications.html              Every paper, grouped by year
_bibliography/papers.bib       Papers, used by both pages
_news/                         News items, one Markdown file each
_layouts/bib.html              A paper on the publications page
_layouts/bib-selected.html     A selected paper with its figure on the homepage
_includes/paper.html           Title, authors, venue and links, shared by both layouts
_includes/head.html            Shared <head> tags (title, description, fonts, analytics)
assets/img/                    Profile photo, favicon, paper figures (assets/img/papers/)
assets/pdf/                    CV and other PDFs
_config.yml                    Site settings
.github/workflows/deploy.yml   Builds the site and publishes it to the gh-pages branch
```

## Add a paper

Add a BibTeX entry to `_bibliography/papers.bib`. Both pages list papers in file order, so put new entries at the top.

```bibtex
@inproceedings{kim2027example,
  title     = {Paper title},
  author    = {Kim, Dong-Kyum and Cha, Meeyoung},
  booktitle = {Proceedings of ...},
  abbr      = {ICML},
  year      = {2027},
  arxiv     = {2701.01234},
  url       = {https://openreview.net/forum?id=...},
  code      = {https://github.com/kdkyum/...},
  selected  = {true},
  preview   = {papers/example.png}
}
```

| Field | What it does |
| --- | --- |
| `selected = {true}` | Shows the paper on the homepage |
| `preview` | Homepage figure, a path under `assets/img/` (put the image in `assets/img/papers/`) |
| `venue` | Venue text to show. Without it, articles show `journal` and other entries show `abbr` |
| `award` | Shown after the venue, for example `Oral` |
| `arxiv`, `url`, `code`, `video`, `website`, `blog`, `tweet` | Links labelled arXiv, Paper, Code, Video, Website, Blog, Tweet |
| `pdf`, `supp`, `poster`, `slides` | Links to a file in `assets/pdf/` or to a full URL |

Your own name is underlined in the author list. It is matched by `first_name` and `last_name` under `scholar` in `_config.yml`.

If a paper is from a year that is not on the publications page yet, add that year to `years:` at the top of `publications.html`.

## Add news

Create `_news/YYYY-MM-DD-short-name.md`:

```markdown
---
date: 2027-01-15
---

[*Paper title*](https://arxiv.org/abs/...) was accepted at **Venue 2027**.
```

The homepage shows news newest first. Set `news_limit` in `_config.yml` to show only the latest few.

## Other updates

- **CV:** replace `assets/pdf/CV_DKK.pdf`. Its source is `assets/pdf/CV_DKK.tex`.
- **Bio, research topics, links, photo:** edit `index.html`.
- **Look:** each page keeps its CSS in a `<style>` block at the top.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. Google Analytics is only added to production builds (`JEKYLL_ENV=production`).

## Deploy

Push to `master`. The `deploy` workflow builds the site and pushes the result to the `gh-pages` branch, which GitHub Pages serves. To redeploy without a new commit, run the workflow from the Actions tab.
