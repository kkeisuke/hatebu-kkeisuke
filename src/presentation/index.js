'use strict'

import cac from 'cac'
import hatebuToMarkdownApp from '../application/HatebuToMarkdownApp'
import markdownToGitHubApp from '../application/MarkdownToGitHubApp'
import markdownToAlgoliaApp from '../application/MarkdownToAlgoliaApp'

const cli = cac()

cli.command('all', 'ローカルで Markdown ファイルをビルドします。').action(() => {
  hatebuToMarkdownApp.createHatebuToMarkdownAll()
})

cli.command('date', 'ローカルで Markdown ファイルをビルドします。').action(() => {
  hatebuToMarkdownApp.createHatebuToMarkdown(cli.args[0])
})

cli.command('push', 'Markdown ファイルを GitHub に push します。').action(() => {
  markdownToGitHubApp.push(cli.args[0])
})

cli.command('algolia', 'Algolia へ json データを追加します。').action(() => {
  markdownToAlgoliaApp.addObjects(cli.args[0])
})

cli.parse()
