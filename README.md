# Remotion Still Image template

A template for designing still images with dynamic data with built-in server for deploying to the cloud.

## Commands

**Design mode: Create an image in React**

```console
yarn dev
```

**Render all OG and Podcast Art**

```console
yarn make
```

**Keep Remotion up to date**

```console
yarn upgrade
```

## Server

You can run a server that serves dynamic images based on it's URL. Run

```console
yarn server
```

And then visit `http://localhost:8000/PodcastArt.png?title=Hello+World` in your browser to render an image.

- Specify the ID of the composition you want to render after the `/`. You can edit the compositions in `src/Video.tsx`.
- Add either a `.png` or a `.jpeg` extension depending on which image format you want.
- You can add input props to your React component by adding query strings: `?title=Hello+World&description=foobar` will pass `{"title": "Hello World", "description": "foo bar"}` to the component.

## Remotion

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

- We provide help [on our Discord server](https://discord.gg/6VzzNDwUwV).
- Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).
- Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).