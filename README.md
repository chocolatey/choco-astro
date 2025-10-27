> [!WARNING]
> This project is now part of the [choco-theme repository](https://github.com/chocolatey/choco-theme/tree/main/packages/astro). Please visit that location for the latest updates and code.

# Chocolatey choco-astro

**NOTE: This project is used on Chocolatey websites and is being released for the benefit of the community. While we endeavour to help and fix issues, it will be limited to GitHub issues, discussions and pull requests when we are able to.**

This repository holds all Astro specific dependencies needed to run Astro on a Chocolatey project.

## Installation

To install and use these Astro dependencies in a project, run the following command:

```
yarn add choco-astro
```

If you have used to the Astro CLI to install dependencies on a project, you will need to remove those dependencies in replace of this package.

## Upgrading choco-astro

Before upgrading Astro dependencies, [review the changelog](https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md) to ensure there is nothing that will need to change in the repositories that use it. If changes are required, issues should be created to track and implement them with the upgrade of the choco-astro package. To upgrade the dependencies in this package that are managed by Astro, run the following command:

```
yarn dlx @astrojs/upgrade
```

## Overriding Automatically Generated Heading ID's

Astro automatically generates ID's for `<h1>` - `<h6>`. Unfortunately, it [generates invalid ID's](https://github.com/withastro/astro/issues/11002) when the heading starts with a number. To address this issue, choco-astro uses the [remark-custom-header-id](https://github.com/sindresorhus/remark-custom-header-id) plugin. See the example below on how to use this plugin to override an ID:

```
## 0.12.1 (May 23, 2024) \{#may-23-2024}
```

## Understanding Astro Components

The Chocolatey Design System has all information relating to Astro Components and how to use them:

* Learn about Astro and how to use [Components in `.mdx` and `.astro`](https://design.chocolatey.org/foundations/astro) file types.
* Learn how to use the [`<Callout />` Component](https://design.chocolatey.org/components/callouts) to display notes and important information.
* Learn how to use the [`<CollapseButton />` Component](https://design.chocolatey.org/collapse-button) to display a button that triggers a collapsed element.
* Learn how to use the [`<DynamicCodeBlock />` and `<DynamicCodeBlockInput />` Components](https://design.chocolatey.org/components/dynamic-code-block) to display a code block with variables that can be replaced with values from inputs.
* Learn how to use the [`<Iframe />` Component](https://design.chocolatey.org/components/iframe) to display videos with defined aspect ratios.
* Learn how to use the [`<Tabs />` Component](https://design.chocolatey.org/components/tabs) to display content in tabbed interface.
* Learn how to use the [`<Xref />` Component](https://design.chocolatey.org/components/xref) to link to other documents within this repository.

## Markdown Diagrams with Mermaid

[Mermaid](https://mermaid.js.org/) via an [Astro integration](https://github.com/chocolatey/choco-astro/blob/main/astro.config.mjs.json) allows an easy way to display information with diagrams written in markdown. A simple example of a [flowChart](https://mermaid.js.org/syntax/flowchart.html) diagram could be as follows:

```
    ```mermaid
      flowchart LR
        A ==> B
    ```
```

## Additional Resources

| Resource         | Purpose                                                                         |
| -----------------| --------------------------------------------------------------------------------|
| astro.config.mjs | Gives a baseline example of how to import and use the recommended integrations. |
| tsconfig.astro   | Give compiler options needed for usage of TypeScript in an Astro project.       |
