import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPath = () => {
  return path.join(process.cwd(), "content/"); // Get full path
};

export const getFileContent = (filename: string) => {
  const POSTS_PATH = getPath();
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

export const getAllPosts = (folder: string | undefined) => {
  const POSTS_PATH = getPath();
  if (folder) {
    const matcher = new RegExp(folder + "-");
    return fs
      .readdirSync(POSTS_PATH) // get files in directory
      .filter((path) => matcher.test(path)) // only in folder
      .filter((path) => /\.md?$/.test(path)) // only .md files
      .map((fileName) => {
        // map over each file
        const source = getFileContent(fileName); // retrieve the file contents
        const parts = fileName.replace(/\.md?$/, "").split("-"); // get the slug from the filename
        const { data: frontmatter } = matter(source); // extract frontmatter
        frontmatter.folder = parts[0];
        frontmatter.slug = parts[1];
        return frontmatter;
      })
      .sort((a, b) => b.startDate - a.startDate);
  } else {
    return fs
      .readdirSync(POSTS_PATH) // get files in directory
      .filter((path) => /\.md?$/.test(path)) // only .md files
      .map((fileName) => {
        // map over each file
        const source = getFileContent(fileName); // retrieve the file contents
        const parts = fileName.replace(/\.md?$/, "").split("-"); // get the slug from the filename
        const { data: frontmatter } = matter(source); // extract frontmatter
        frontmatter.folder = parts[0];
        frontmatter.slug = parts[1];
        return frontmatter;
      })
      .sort((a, b) => b.startDate - a.startDate);
  }
};

export const getAllPublished = (folder: string | undefined) => {
  const posts = getAllPosts(folder);
  const published = posts.filter((post) => {
    return post.isPublished === true;
  });
  return published;
};

export const getSinglePost = (slug: string, folder: string) => {
  const source = getFileContent(`${folder}-${slug}.md`);
  const { data: frontmatter, content } = matter(source);
  frontmatter.slug = slug;
  frontmatter.content = content;
  return frontmatter;
};
