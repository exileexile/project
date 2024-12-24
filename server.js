// app.js 或 server.js
const express = require('express');
const path = require('path');
const app = express();// 导入API路由模块

// 设置中间件（如需要）
app.use(express.static(path.join(__dirname, '.')));

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});