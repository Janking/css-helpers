<style type="text/css">
body{
	width: 800px;
}
</style>
研发Sass结构改版讨论
============


###改版目的
- [x] 降低项目结构的耦合度。
- [x] 降低项目开发的参与门槛。
- [x] 增强自动化构建的灵活度。


###Sass新结构树

* sass
	* bootstrap/foundation 							`UI框架`

	* _variables.scss 		  						`全局变量及资源路径等`

	* tools											`工具集合`
		* _functions.scss   						`原子方法`
		* _mixins.scss      						`原子宏`
		* _utilities.scss   						`text-align,margin,padding,line-height,position,float,display`
		* _helpers.scss      						`多边形生成器,垂直居中器,Media Query,ellipsis,movie-fluid...`

	* browser
		* _normalize.scss   						`如果是大型项目,对各设备的样式要求一致,则选normalize`
		* _reset.scss		  						`如果是小项目或活动页,则选择reset`

	* _base.scss            						`对html,body,a,ul,ol,h1~h6等原始样式作项目VI要求的处理`

	* components      								`组件文件夹`
		* _pagination.scss                          `分页组件`
		* _dropdown.scss                            `下拉菜单组件`
		* _alert.scss                               `提示组件`
		* _buttons.scss	  							`按钮组件`
		* _tables.scss	  							`表格组件`
		* _tabs.scss                                `选项卡组件`
		* ...

	* layout										`存放公共布局样式`
		* _grids.scss        						`栅格系统`
		* _navigator.scss							`导航样式`
		* _header.scss 								`页头样式`
		* _footer.scss 								`页脚样式`
		* _forms.scss		  						`表单样式`
		* _sidebar.scss 							`边栏`
		* ...

	* verdors		  								`第三方插件`
		* _iui.scss
		* _summernote.scss
		* _webuploader.scss
		* ...

	* pages           								`业务页面样式`
		* _home.scss                                `首页`
		* _article.scss                             `文章页`
		* _concat.scss                              `联系我们`

	* inbox                                         `沙盒`
		* _[developer name].scss 					`其他成员参与开发,以开发者名字命名`

	* style           								`入口文件`


###代码规范

* 每个样式属性后必须加 ";" 方便压缩工具"断句"。
* Class命名中禁止出现大写字母，（必须）采用” - “对class中的字母分隔，如：

```

//正确的写法
.hotel-title {
 font-weight: bold;
}

//不推荐的写法
.hotelTitle {
 font-weight: bold;
}

```

* 多选择器规则之间必须换行


 ```css
  /* 推荐的写法 */
 a.btn,
 input.btn,
 input[type="button"] {
     ......
 }
 ```




### 通用命名

####(1)页面框架命名，一般具有唯一性

Class名称|命名|Class名称	|命名
:---------------|:---------------|:---------------|:---------------
头部|header|主体|	main
脚部|footer|容器|wrapper
侧栏|sideBar|栏目|column
布局|layout|||

####(2)模块结构命名

Class名称|命名|Class名称|命名
:---------------|:---------------|:---------------|:---------------
模块(如：新闻模块)	|m (m-news)	|标题栏	|title
内容	|content	|次级内容	|sub-content


####(3)导航结构命名

Class名称|命名|Class名称|命名
:---------------|:---------------|:---------------|:---------------
导航	|nav	|主导航	|main-nav
子导航|	sub-nav	|顶部导航	|top-nav
菜单	|menu	|子菜单	|sub-menu


####(4)一般元素命名
Class名称|命名|Class名称|命名
:---------------|:---------------|:---------------|:---------------
二级|	sub	|面包屑|	breadcrumb
标志	|logo	|广告	|bner(禁用banner或ad)
登陆	|login	|注册	|register/reg
搜索	|search	|加入	|join
状态	|status	|按钮	|btn
滚动	|scroll	|标签页	|tab
文章列表	|list|	短消息|	msg/message
当前的	|current	|提示小技巧	|tips
图标	|icon|	注释|	note
指南	|guide	|服务	|service
热点	|hot	|新闻	|news
下载	|download	|投票	|vote
合作伙伴	|partner	|友情链接	|link
版权|	copyright|	演示|	demo
下拉框	|select	|摘要	|summary
翻页	|pages|	主题风格|	themes
设置	|set	|成功|	suc
按钮	|btn|	文本|	txt
颜色	|color/c|	背景	|bg
边框	|border/bor|	居中|	center
上	|top/t	|下|	bottom/b
左	|left/l	|右	|right/r
添加	|add	|删除	|del
间隔	|sp|	段落	|p
弹出层	|pop	|公共	|global/gb
操作|	op	|密码	|pwd
透明	|tran|	信息	|info
重点	|hit	|预览	|pvw
单行输入框|	input|	首页	|index
日志	|blog	|相册|	photo
留言板	|guestbook|	用户|	user
确认	|confirm	|取消	|cancel
报错	|error||


### 题外话：一个优质前端应该具备哪些风格？
