'use strict'

const Octokit = require('@octokit/rest')
let octokit = null

const owner = GITHUB_OWNER
const repo = GITHUB_REPO
const ref = GITHUB_REF
const message = COMMIT_MSG

/**
 * API を用いて Github リポジトリに commit する方法
 * https://developer.github.com/v3/git/
 */

export default {
  /**
   * GITHUB_API_TOKEN をセットします。
   */
  authenticate() {
    if (!GITHUB_API_TOKEN) {
      return null
    }
    // console.log('GITHUB_API_TOKEN', GITHUB_API_TOKEN)

    return new Octokit({
      auth: `token ${GITHUB_API_TOKEN}`
    })
  },
  /**
   * Blob を作成します。
   * @param {any[]} markdowns マークダウンファイルの配列
   */
  async createBlob(markdowns) {
    try {
      const tree = []
      const num = markdowns.length
      for (let i = 0; i < num; i++) {
        const md = markdowns[i]
        const content = Buffer.from(md.content).toString()
        const blob = await octokit.git.createBlob({ owner, repo, content })
        console.log('Blob SHA1', blob.data.sha)
        tree.push({
          path: md.path,
          mode: '100644',
          type: 'blob',
          sha: blob.data.sha
        })
      }
      return new Promise((resolve, reject) => {
        resolve(tree)
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  },
  /**
   * tree を作成します。
   * @param {any[]} tree tree の配列（Objects (of path, mode, type, and sha) specifying a tree structure）
   * @param {string} base_tree 派生元の tree の SHA1
   */
  async createTree(tree, base_tree) {
    try {
      const newTree = await octokit.git.createTree({ owner, repo, tree, base_tree })
      return new Promise((resolve, reject) => {
        resolve(newTree.data.sha)
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  },
  /**
   * マークダウンファイルを GitHub のリポジトリへ push します。
   * @param {any[]} markdowns マークダウンファイルの配列
   */
  async push(markdowns) {
    octokit = this.authenticate()
    if (!octokit) {
      return new Promise((resolve, reject) => {
        reject('GITHUB_API_TOKEN がありません')
      })
    }

    try {
      const latestRef = await octokit.git.getRef({ owner, repo, ref })
      const commit_sha = latestRef.data.object.sha
      console.log('commit_sha', commit_sha)

      // Get the current commit object
      // Retrieve the tree it points to
      const latestCommit = await octokit.git.getCommit({ owner, repo, commit_sha })
      const base_tree = latestCommit.data.tree.sha
      console.log('base_tree', base_tree)

      // Retrieve the content of the blob object that tree has for that particular file path
      // Change the content somehow and post a new blob object with that new content, getting a blob SHA back
      const newTree = await this.createBlob(markdowns)

      // Post a new tree object with that file path pointer replaced with your new blob SHA getting a tree SHA back
      const tree = await this.createTree(newTree, base_tree)
      console.log('tree', tree)

      // Create a new commit object with the current commit SHA as the parent and the new tree SHA, getting a commit SHA back
      const parents = [latestCommit.data.sha]
      const newCommit = await octokit.git.createCommit({ owner, repo, message, tree, parents })
      const sha = newCommit.data.sha
      console.log('SHA1', sha)

      // Update the reference of your branch to point to the new commit SHA
      const result = await octokit.git.updateRef({ owner, repo, ref, sha })
      console.log('SHA1', result.data.object.sha)

      return new Promise((resolve, reject) => {
        resolve(result)
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }
}
