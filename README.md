# svg2iconfont

利用webfonts-loader，将*.svg文件，转换为字体文件  
可在webfont.font.js中，配置需要的字体文件类型  

***

### 安装：
```bash
npm i --save-dev svg-iconfont
npm i --save-dev webpack-cli
```

***

### 此组件功能：
 1. 将svg文件批量打包为iconFont字体包，以及输出对应的css文件
 ```bash
 svg2font
 ```
 2. 将字体包转换为base64编码（！多数情况下你用不到此功能）  
 ```bash
 svg2font
 svg2base64
 ``` 

***

### 目录：
使用此组件，目录应为：  
>src   
>>assets   
>>>s2f-svg（！注意：这是你的svg存放目录，需手动创建）   
>>>s2f-iconfont（编译后的字体包文件夹，无需手动创建）   
>>>s2f-base64（编译后的base64字体包文件夹，无需手动创建）    
 
