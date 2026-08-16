# Tsomoore Notes

一个用于读书笔记、计算机学习、论文阅读、随笔和收藏的个人博客。站点基于 Astro + MDX，支持 KaTeX 数学公式、代码高亮、分类、标签、RSS 和 GitHub Pages 自动部署。

## 本地使用

```bash
npm install
npm run dev
```

构建检查：

```bash
npm run build
```

## 写一篇新笔记

在 `src/content/notes` 里新增 `.md` 或 `.mdx` 文件：

```md
---
title: "文章标题"
description: "一句话摘要"
date: 2026-08-16
type: "论文"
categories: ["机器学习", "表示学习"]
tags: ["contrastive-learning", "reading-note"]
math: true
---

正文内容。
```

`type` 可选值：

- `读书笔记`
- `计算机`
- `论文`
- `随笔`
- `收藏`

行内公式写作 `$E = mc^2$`，块级公式写作：

```tex
$$
\nabla_\theta \mathcal{L}(\theta)
$$
```

图片放到 `public/images`，正文中用 `/images/文件名` 引用。

## 部署

仓库推送到 GitHub 后，GitHub Actions 会构建并发布到 GitHub Pages。首次使用时需要在仓库 Settings → Pages 中把 Source 设为 `GitHub Actions`。
