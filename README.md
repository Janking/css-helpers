<style type="text/css">
body{
	width: 800px;
}
</style>
Sass新结构树
============

* sass
	* _variable.scss            						`config/variable/sources...`
	* tool
		* functions
			- [x] _px-to-em.scss
			- [x] _px-to-rem.scss
			- [x] _strip-units.scss
			- [x] _unpack.scss
		* mixins
			* animation
				- [x] _animation.scss
				- [x] _backface-visibility.scss
				- [x] _keyframes.scss
				- [x] _perspective.scss
				- [x] _transition.scss
			* form
				- [x] _apperance.scss
				- [x] _button.scss
				- [x] _placeholder.scss
				- [x] _user-select.scss
			* media
				- [x] _hidipi-media-query.scss
			* typography
				- [x] _flexbox.scss
				- [x] _margin.scss
				- [x] _padding.scss
				- [x] _position.scss
				- [x] _selection.scss
		* helpers
			- [x] _clearfix.scss
			- [x] _ellipsis.scss
			- [x] _timing-functions.scss
			- [x] _triangle.scss
			- [x] _vertical-center.scss
		* _index.scss
	* browser
		- [x] _normalize.scss
		- [x] _reset.scss

	* _base.scss            						`对html,body,a,ul,ol,h1~h6等原始样式作项目VI要求的处理`

	* component      								`组件文件夹`
		* _tables.scss	  							`表格组件`
		* _tabs.scss                                `选项卡组件`
		* ...

	* layout										`存放公共布局样式,例如:`

	* verdor		  								`第三方插件,例如:`
		* _iui.scss
		* _summernote.scss
		* _webuploader.scss
		* ...

	* page          								`业务页面样式,例如:`
		* _home.scss                                `首页`

	* inbox                                         `沙盒,例如:`
		* _[developer name].scss 					`其他成员参与开发,以开发者名字命名`

	* style.scss           							`入口文件`


###代码规范

* 每个样式属性后必须加 ";" 方便压缩工具"断句"。
* Class命名中禁止出现大写字母，（必须）采用” - “对class中的字母分隔，如：

```

//good
.hotel-title {
 font-weight: bold;
}

//bad
.hotelTitle {
 font-weight: bold;
}

```

* 多选择器规则之间必须换行


 ```css
  /* good */
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


