(function($){"use strict";var $wrapper=$('.main-wrapper');var $pageWrapper=$('.page-wrapper');var $slimScrolls=$('.slimscroll');if($(window).width()>767){if($('.theiaStickySidebar').length>0){$('.theiaStickySidebar').theiaStickySidebar({additionalMarginTop:30});}}
var Sidemenu=function(){this.$menuItem=$('#sidebar-menu a');};function init(){var $this=Sidemenu;$('#sidebar-menu a').on('click',function(e){if($(this).parent().hasClass('submenu')){e.preventDefault();}
if(!$(this).hasClass('subdrop')){$('ul',$(this).parents('ul:first')).slideUp(350);$('a',$(this).parents('ul:first')).removeClass('subdrop');$(this).next('ul').slideDown(350);$(this).addClass('subdrop');}else if($(this).hasClass('subdrop')){$(this).removeClass('subdrop');$(this).next('ul').slideUp(350);}});$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');}
init();$('body').append('<div class="sidebar-overlay"></div>');$(document).on('click','#mobile_btn',function(){$wrapper.toggleClass('slide-nav');$('.sidebar-overlay').toggleClass('opened');$('html').addClass('menu-opened');return false;});$(".sidebar-overlay").on("click",function(){$wrapper.removeClass('slide-nav');$(".sidebar-overlay").removeClass("opened");$('html').removeClass('menu-opened');});if($('.page-wrapper').length>0){var height=$(window).height();$(".page-wrapper").css("min-height",height);}
$(window).resize(function(){if($('.page-wrapper').length>0){var height=$(window).height();$(".page-wrapper").css("min-height",height);}});$(document).on('click','#open_msg_box',function(){$wrapper.toggleClass('open-msg-box');return false;});if($('.select').length>0){$('.select').select2({minimumResultsForSearch:-1,width:'100%'});}
if($('.datetimepicker').length>0){$('.datetimepicker').datetimepicker({format:'DD-MM-YYYY',icons:{up:"fas fa-angle-up",down:"fas fa-angle-down",next:'fas fa-angle-right',previous:'fas fa-angle-left'}});}
if($('[data-toggle="tooltip"]').length>0){$('[data-toggle="tooltip"]').tooltip();}
if($('.datatable').length>0){$('.datatable').DataTable({"bFilter":false,});}
if($slimScrolls.length>0){$slimScrolls.slimScroll({height:'auto',width:'100%',position:'right',size:'7px',color:'#ccc',allowPageScroll:false,wheelStep:10,touchScrollStep:100});var wHeight=$(window).height()-60;$slimScrolls.height(wHeight);$('.sidebar .slimScrollDiv').height(wHeight);$(window).resize(function(){var rHeight=$(window).height()-60;$slimScrolls.height(rHeight);$('.sidebar .slimScrollDiv').height(rHeight);});}
if($('.toggle-password').length>0){$(document).on('click','.toggle-password',function(){$(this).toggleClass("fa-eye fa-eye-slash");var input=$(".pass-input");if(input.attr("type")=="password"){input.attr("type","text");}else{input.attr("type","password");}});}
$(document).on('click','#check_all',function(){$('.checkmail').click();return false;});if($('.checkmail').length>0){$('.checkmail').each(function(){$(this).on('click',function(){if($(this).closest('tr').hasClass('checked')){$(this).closest('tr').removeClass('checked');}else{$(this).closest('tr').addClass('checked');}});});}
if($('.checkbox-all').length>0){$('.checkbox-all').click(function(){$('.checkmail').click();});}
if($('.checkmail').length>0){$('.checkmail').each(function(){$(this).click(function(){if($(this).closest('tr').hasClass("checked")){$(this).closest('tr').removeClass('checked');}else{$(this).closest('tr').addClass('checked');}});});}
$(document).on('click','.mail-important',function(){$(this).find('i.fa').toggleClass('fa-star').toggleClass('fa-star-o');});$(document).on('click','#toggle_btn',function(){if($('body').hasClass('mini-sidebar')){$('body').removeClass('mini-sidebar');$('.subdrop + ul').slideDown();}else{$('body').addClass('mini-sidebar');$('.subdrop + ul').slideUp();}});$(document).on('mouseover',function(e){e.stopPropagation();if($('body').hasClass('mini-sidebar')&&$('#toggle_btn').is(':visible')){var targ=$(e.target).closest('.sidebar').length;if(targ){$('body').addClass('expand-menu');$('.subdrop + ul').slideDown();}else{$('body').removeClass('expand-menu');$('.subdrop + ul').slideUp();}
return false;}});$(document).on('click','#filter_search',function(){$('#filter_inputs').slideToggle("slow");});$(document).on('mouseover',function(e){e.stopPropagation();if($('body').hasClass('mini-sidebar')&&$('#toggle_btn').is(':visible')){var targ=$(e.target).closest('.sidebar').length;if(targ){$('body').addClass('expand-menu');$('.subdrop + ul').slideDown();}else{$('body').removeClass('expand-menu');$('.subdrop + ul').slideUp();}
return false;}});$(document).on('click','#filter_search',function(){$('#filter_inputs').slideToggle("slow");});$(document).on('mouseover',function(e){e.stopPropagation();if($('body').hasClass('mini-sidebar')&&$('#toggle_btn').is(':visible')){var targ=$(e.target).closest('.sidebar').length;if(targ){$('body').addClass('expand-menu');$('.subdrop + ul').slideDown();}else{$('body').removeClass('expand-menu');$('.subdrop + ul').slideUp();}
return false;}});$(document).on('click','#filter_search',function(){$('#filter_inputs').slideToggle("slow");});if($('.custom-file-container').length>0){var firstUpload=new FileUploadWithPreview('myFirstImage')
var secondUpload=new FileUploadWithPreview('mySecondImage')}
if($('.clipboard').length>0){var clipboard=new Clipboard('.btn');}
if($('#summernote').length>0){$('#summernote').summernote({height:300,minHeight:null,maxHeight:null,focus:true});}
if($('[data-bs-toggle="tooltip"]').length>0){var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList=tooltipTriggerList.map(function(tooltipTriggerEl){return new bootstrap.Tooltip(tooltipTriggerEl)})}
if($('.popover-list').length>0){var popoverTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList=popoverTriggerList.map(function(popoverTriggerEl){return new bootstrap.Popover(popoverTriggerEl)})}
if($('[data-toggle="popover"]').length>0){$('[data-toggle="popover"]').popover();}
if($('.counter').length>0){$('.counter').counterUp({delay:20,time:2000});}
if($('#timer-countdown').length>0){$('#timer-countdown').countdown({from:180,to:0,movingUnit:1000,timerEnd:undefined,outputPattern:'$day Day $hour : $minute : $second',autostart:true});}
if($('#timer-countup').length>0){$('#timer-countup').countdown({from:0,to:180});}
if($('#timer-countinbetween').length>0){$('#timer-countinbetween').countdown({from:30,to:20});}
if($('#timer-countercallback').length>0){$('#timer-countercallback').countdown({from:10,to:0,timerEnd:function(){this.css({'text-decoration':'line-through'}).animate({'opacity':.5},500);}});}
if($('#timer-outputpattern').length>0){$('#timer-outputpattern').countdown({outputPattern:'$day Days $hour Hour $minute Min $second Sec..',from:60*60*24*3});}
var chatAppTarget=$('.chat-window');(function(){if($(window).width()>991)
chatAppTarget.removeClass('chat-slide');$(document).on("click",".chat-window .chat-users-list a.media",function(){if($(window).width()<=991){chatAppTarget.addClass('chat-slide');}
return false;});$(document).on("click","#back_user_list",function(){if($(window).width()<=991){chatAppTarget.removeClass('chat-slide');}
return false;});})();$(window).on("load",function(){document.onkeydown=function(e){if(e.keyCode==123){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='J'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.keyCode=='U'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='C'.charCodeAt(0)){return false;}};});document.oncontextmenu=function(){return false;};$(document).mousedown(function(e){if(e.button==2){return false;}
return true;});})(jQuery);