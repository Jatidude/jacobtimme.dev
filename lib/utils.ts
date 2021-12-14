import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { isPostMeta, PostMeta } from '../types/Blog'
const root = process.cwd()

export async function getFiles(dataType: string) {
  return fs.readdirSync(path.join(root, 'data', dataType), 'utf-8')
}

export async function getPostBySlug(dataType: string, slug: string) {
  const source = fs.readFileSync(path.join(root, 'data', dataType, `${slug}.md`), 'utf8')

  const { data, content } = matter(source)

  return {
    meta: data,
    markdownBody: content,
  }
}

export function isArrayOf<T>(elemGuard: (x: any) => x is T) {
    (arr: any[]): arr is Array<T> => arr.every(elemGuard);
}

export function isInstanceOf<T>(ctor: new (...args: any) => T) {
    (x: any): x is T => x instanceof ctor;
}

export function getAllPostsFrontMatter(dataType: string): {meta: PostMeta, slug: string}[] {
  const files = fs.readdirSync(path.join(root, 'data', dataType));

  return files.map((postSlug: string) => {
    const source = fs.readFileSync(path.join(root, 'data', dataType, postSlug), 'utf8');
    const { data } = matter(source);

    if(isPostMeta(data)){
      return {
        meta: data,
        slug: postSlug.replace('.md', ''),
      }
    } else {
        console.log(data)
        throw new Error(`The file ${postSlug} frontmatter is incorrectly formatted`)
    }
  });
}

export function getMostRecentPosts(dataType:string, count: number): {meta: PostMeta, slug: string}[] {
  const files = fs.readdirSync(path.join(root, 'data', dataType));
  let posts = files.map((postSlug: string) => {
    const source = fs.readFileSync(path.join(root, 'data', dataType, postSlug), 'utf8');
    const { data } = matter(source);

    if(isPostMeta(data)){
      return {
        meta: data,
        slug: postSlug.replace('.md', ''),
      }
    } else {
        console.log(data)
        throw new Error(`The file ${postSlug} frontmatter is incorrectly formatted`)
    }
  });
  posts.sort((a, b) => a.meta.publishedDate < b.meta.publishedDate ? -1 : 1);
  console.log(posts)
  return posts.slice(0, count);
}