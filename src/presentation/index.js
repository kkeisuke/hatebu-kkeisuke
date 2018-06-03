'use strict'

import cac from 'cac'
import hatebuToMarkdownApp from '../application/HatebuToMarkdownApp'
import markdownToGitHubApp from '../application/MarkdownToGitHubApp'

const cli = cac()

cli.command(
  'all',
  {
    desc: 'ローカルで Markdown ファイルをビルドします。'
  },
  () => {
    hatebuToMarkdownApp.createHatebuToMarkdownAll()
  }
)

cli.command(
  'date',
  {
    desc: 'ローカルで Markdown ファイルをビルドします。'
  },
  input => {
    hatebuToMarkdownApp.createHatebuToMarkdown(input[0])
  }
)

cli.command(
  'push',
  {
    desc: 'Markdown ファイルを GitHub に push します。'
  },
  input => {
    markdownToGitHubApp.push(input[0])
  }
)

cli.parse()
