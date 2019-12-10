### 简介
```
电商后台管理系统
```

#### 命令
```
# 启动
npm run serve

# 打包
npm run build

# 静态资源分析
npm run report

# 代码格式检查并自动修复
npm run lint
```

#### 目录结构
```

```

#### 代码规范
```
代码规范的目的是提高项目的可维护性。
请阅读以上目录结构，了解每个文件和文件夹的作用，按照项目结构风格来编程。
项目已配置eslint + prettier，需要自行配置好编辑器才能生效。
vscode的eslint配置： 1、安装eslint插件。 2、打开vscode设置的settings.json，添加以下配置： 
"eslint.validate": [
"javascript",
"javascriptreact",
"vue-html",
{ "language": "vue", "autoFix": true }
],
"eslint.options": {
"plugins": ["html"]
},
"eslint.autoFixOnSave": true,
vscode的prettier配置： 1、安装prettier插件。 2、打开vscode设置的settings.json，添加以下配置： 
"[html]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[css]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[less]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[scss]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[vue]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"vetur.format.defaultFormatter.html": "js-beautify-html",
"vetur.format.defaultFormatterOptions": {
"prettier": {
"eslintIntegration": true,
"singleQuote": true,
"semi": true
}
},
另外vscode还需要安装个插件：EditorConfig for VS Code 用来自动识别项目的.editorconfig文件配置，保持编辑器编码风格的统一。
```