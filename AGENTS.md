# AGENTS.md

## 项目名称

RepoPilot

## 项目目标

RepoPilot 是一个面向面试展示的 AI 技术 portfolio 项目。

它是一个 AI Codebase Onboarding Assistant，用来帮助开发者理解陌生代码库、解释代码、分析 bug，并生成结构化排查建议。

本项目的目标不是构建一个完整 SaaS 产品。
本项目的目标是在一个小而可运行的 demo 中，展示现代 AI 应用开发模式。

## 需要逐步展示的 AI 技术

项目应逐步展示：

* Skills
* Skill Router
* Structured Output
* Schema Validation
* Guardrails
* Evals
* 后续：RAG
* 后续：Tool Calling
* 后续：Memory
* 后续：Multimodal Input

## 开发原则

增量开发。

不要一次性实现整个项目。

每一步只添加一个小能力，并且必须容易运行和验证。

## MVP 方向

第一个 MVP 只实现一个垂直切片：

Code Explanation Skill

用户流程：

1. 用户粘贴一段代码片段
2. 系统将任务路由到 `code_explanation`
3. 系统加载 Code Explanation Skill 配置
4. 系统返回 mock 的结构化 JSON 响应
5. 系统校验 JSON 结构
6. 系统运行一个基础 eval 检查
7. UI 展示选中的 skill、结构化结果、eval 分数和失败检查项

## 第一版实现规则

第一版实现时：

* 使用 React + Vite + TypeScript
* 暂时不接真实 AI API
* 不添加后端
* 不添加登录
* 不添加数据库
* 暂时不添加 RAG
* 暂时不添加 tool calling
* 暂时不添加 memory
* 暂时不添加 multimodal input
* 暂时不创建多个 skills
* 不要把应用做成通用 chatbot

## 编码规则

* 保持代码简单、可读
* 优先使用清晰的文件名
* AI 相关逻辑与 UI 逻辑分离
* 使用 TypeScript 类型描述结构化输出
* 渲染结构化输出前必须先做校验
* UI 中清晰展示错误
* 不要隐藏解析或校验失败

## 建议文件结构

```text
src/
  App.tsx
  main.tsx
  styles.css
  skills/
    codeExplanationSkill.ts
  lib/
    skillRouter.ts
    mockAiResponse.ts
    validateCodeExplanationOutput.ts
    evalCodeExplanationOutput.ts
  types/
    codeExplanation.ts
```

## 分步工作流

当我要求你实现某个功能时：

1. 先说明会创建或修改哪些文件
2. 然后做最小必要改动
3. 完成后说明如何运行和测试
4. 不添加无关功能
5. 除非我明确要求，不要重构已经可工作的代码

## 当前优先级

从项目骨架和静态 UI 开始。

第一步编码只创建：

* React + Vite + TypeScript 项目
* 页面标题
* 副标题
* 代码输入 textarea
* Analyze 按钮
* 空结果区域

第一步不要实现 router、mock AI response、validation 或 eval。
