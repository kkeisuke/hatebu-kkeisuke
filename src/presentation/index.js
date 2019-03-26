'use strict'

import cac from 'cac'
import hatebuToMarkdownApp from '../application/HatebuToMarkdownApp'
import markdownToGitHubApp from '../application/MarkdownToGitHubApp'

const cli = cac()

cli.command('all', 'ローカルで Markdown ファイルをビルドします。').action(() => {
  hatebuToMarkdownApp.createHatebuToMarkdownAll()
})

cli.command('date', 'ローカルで Markdown ファイルをビルドします。').action(input => {
  hatebuToMarkdownApp.createHatebuToMarkdown(input[0])
})

cli.command('push', 'Markdown ファイルを GitHub に push します。').action(input => {
  markdownToGitHubApp.push(input[0])
})

cli.parse()
