### 报告
姓名：陶心愉<br>
学号：19302010067<br>
GitHub地址：https://github.com/hi-27/project1<br>
Git Page地址：https://hi-27.github.io/project1/ndex.html<br>
除了bonus都写了。<br>
#### 首页
导航栏是蓝色，每一个栏目用table排列。鼠标悬浮时，字体由白变为淡黄色。<br>
当前页面的栏目背景变浅，字体稍大。<br>
个人中心是一个按钮，其下拉列表的display是hidden，当鼠标悬浮时变为block，出现列表。列表每一项都配有图标。<br>
大图展示部分使用js做了一个4张画面的轮播展示，鼠标悬浮于列表图案时可控制出现图片。<br>
小图展示共展示六张，用grid排布。每一张图片都有标题与描述，使用-webkit-line-clamp的属性让文字溢出部分变为省略号，但是文字行数固定。<br>
页脚使用的是与导航栏一样的蓝色。<br>
右下角有两个按钮，位置用fixed相对固定于窗口。使用window.location.href='#'让页面快速返回顶部。<br>
除了大图展示图片和页脚点击不跳转以外，所有其他部分均可正常跳转。<br>
#### 浏览页
使用div将所有内容分块排放。<br>
使用select实现content、country和city的下拉列表筛选。<br>
用js实现了country和city的二级联动。当country被选择后(onchange)，js获得value（国家名字）通过switch匹配city，并通过innerHTML将city的option元素写入其select原素中，从而达到二级联动效果。<br>
左侧边栏分为三个部分分别是通过title筛选的input（text），hot country和hot city。后两块通过dl、dt、dd使缩进和谐。点击跳转返回本页。<br>
右侧展示filter的result，使用grid。底部用footer展示页码，无法翻页，点击后用js使图片顺序发生变化同时返回页面顶部，假装翻页了。<br>、
该页所有图片点击可跳转至图片详情页。<br>
#### 搜索页
在该页可通过title与description进行图片搜索。title较短使用input（text），而description较长，使用text area，只显示三行。<br>
使用table来展示搜索结果，左侧为图片，右侧为标题与描述。描述使用-webkit-line-clamp控制，显示三行，多于部分显示省略号。<br>
#### 上传页
使用input（file)完成文件上传，留一个src是空的的img用于图片预览。<br>
一开始img的display是hidden，在图片上传之后变为block。js中图片上传之后，通过FileReader读取图片的url，改写img的src,使它显示在网页中。<br>
用input（text）和text area做了图片标题、描述和拍摄国家城市的上传。<br>
#### 我的照片/我的收藏
图片部分与搜索页的result展示一致。<br>
我的照片在右侧描述下部多出两个按钮modify跳转至上传，delete通过alert显示。而我的收藏只有delete一个按钮。<br>
#### 登入
登入按钮通过onclick="window.location.href=''"完成跳转。<br>
有链接跳转至注册界面。<br>
界面是两张图片交叠，上层的透明度降低，可透出背景图片。但是opacity把字的透明度也降低了，所以没有调的很低。<br>
#### 注册
基本是对lab的复制黏贴的，把要填的内容改了一下。<br>
#### 图片详情
有图片展示、描述、作者、拍摄国家城市和收藏数。<br>
有用于收藏的按钮，用js做了一个点击之后图标会改变，以体现图片已经被收藏了。<br>




