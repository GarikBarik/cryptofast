/**
 * Yii Captcha widget.
 *
 * This is the JavaScript widget used by the yii\captcha\Captcha widget.
 *
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
!function(t){t.fn.yiiCaptcha=function(a){return i[a]?i[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?(t.error("Method "+a+" does not exist in jQuery.yiiCaptcha"),!1):i.init.apply(this,arguments)};var a={refreshUrl:void 0,hashKey:void 0},i={init:function(e){return this.each((function(){var r=t(this),n=t.extend({},a,e||{});r.data("yiiCaptcha",{settings:n}),r.on("click.yiiCaptcha",(function(){return i.refresh.apply(r),!1}))}))},refresh:function(){var a=this,i=this.data("yiiCaptcha").settings;t.ajax({url:a.data("yiiCaptcha").settings.refreshUrl,dataType:"json",cache:!1,success:function(e){a.attr("src",e.url),t("body").data(i.hashKey,[e.hash1,e.hash2])}})},destroy:function(){return this.off(".yiiCaptcha"),this.removeData("yiiCaptcha"),this},data:function(){return this.data("yiiCaptcha")}}}(window.jQuery);