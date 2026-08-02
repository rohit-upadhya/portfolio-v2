# rohitupadhya.com

Personal site and weekly blog. Built with [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/), deployed on [Vercel](https://vercel.com/).

## Commands

| Command                    | Action                                      |
| :-------------------------- | :------------------------------------------ |
| `npm install`               | Install dependencies                        |
| `npm run dev`                | Start local dev server at `localhost:4321`  |
| `npm run build`              | Build the production site to `./dist/`      |
| `npm run preview`            | Preview the production build locally        |
| `npm run new-post "Title"`  | Scaffold a new dated blog post              |

## Writing a weekly blog post

```sh
npm run new-post "Post Title"
```

This creates `src/content/blog/YYYY-MM-DD-post-title.md` with frontmatter pre-filled. Fill in `description`, write the post body in markdown, then commit and push — the blog index, the post's route, and the RSS feed (`/rss.xml`) all update automatically.

## Project structure

- `src/content/blog/` — one markdown file per blog post
- `src/content/research/` — one markdown file per research write-up
- `src/data/experience.ts` — education/work-experience data shown on the home page
- `src/components/`, `src/layouts/` — shared header/footer/layout
- `src/pages/` — routes (home, blog index/detail, research index/detail, RSS feed)
