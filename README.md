# svg2iconfont
利用webfonts-loader，将*.svg文件，转换为字体文件  
可在webfont.font.js中，配置需要的字体文件类型  

***

运行:
```bash
npm run toFont    # 将svg打包成ttf及其他类型的字体包
npm run toBase64  # 字体包转为base64
```

***

输出目录：  
- dist  
  - fonts  
    - css
      - font.css    // 字体样式
    - typeface  
      - myfonticons.ttf  // 字体包
  - base64
    - css  
      - main.css    // base64的字体样式
