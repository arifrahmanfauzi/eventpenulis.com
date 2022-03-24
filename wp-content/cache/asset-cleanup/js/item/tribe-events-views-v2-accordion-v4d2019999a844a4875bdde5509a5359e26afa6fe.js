/*!/wp-content/plugins/the-events-calendar/src/resources/js/views/accordion.js*/
tribe.events=tribe.events||{};tribe.events.views=tribe.events.views||{};tribe.events.views.accordion={};(function($,obj){'use strict';var $document=$(document);obj.selectors={accordionTrigger:'[data-js~="tribe-events-accordion-trigger"]',};obj.setOpenAccordionA11yAttrs=function($header,$content){$header.attr('aria-expanded','true')
$content.attr('aria-hidden','false')};obj.setCloseAccordionA11yAttrs=function($header,$content){$header.attr('aria-expanded','false')
$content.attr('aria-hidden','true')};obj.closeAllAccordions=function($container){$container.find(obj.selectors.accordionTrigger).each(function(index,header){var $header=$(header);var contentId=$header.attr('aria-controls');var $content=$document.find('#'+contentId);obj.closeAccordion($header,$content)})};obj.openAccordion=function($header,$content){obj.setOpenAccordionA11yAttrs($header,$content);$content.css('display','block')};obj.closeAccordion=function($header,$content){obj.setCloseAccordionA11yAttrs($header,$content);$content.css('display','')};obj.toggleAccordion=function(event){var $container=event.data.container;var $header=$(event.data.target);var contentId=$header.attr('aria-controls');var $content=$container.find('#'+contentId);if('true'===$header.attr('aria-expanded')){obj.closeAccordion($header,$content)}else{obj.openAccordion($header,$content)}};obj.deinitAccordionA11yAttrs=function($header,$content){$header.removeAttr('aria-expanded').removeAttr('aria-controls');$content.removeAttr('aria-hidden')};obj.initAccordionA11yAttrs=function($header,$content){$header.attr('aria-expanded','false').attr('aria-controls',$content.attr('id'));$content.attr('aria-hidden','true')};obj.deinitAccordion=function(index,header){$(header).off('click',obj.toggleAccordion)};obj.initAccordion=function($container){return function(index,header){$(header).on('click',{target:header,container:$container},obj.toggleAccordion)}};obj.unbindAccordionEvents=function($container){$container.find(obj.selectors.accordionTrigger).each(obj.deinitAccordion)};obj.bindAccordionEvents=function($container){$container.find(obj.selectors.accordionTrigger).each(obj.initAccordion($container))};obj.unbindEvents=function(event,jqXHR,settings){var $container=event.data.container;obj.unbindAccordionEvents($container);$container.off('beforeAjaxSuccess.tribeEvents',obj.unbindEvents)};obj.bindEvents=function(event,index,$container,data){obj.bindAccordionEvents($container);$container.on('beforeAjaxSuccess.tribeEvents',{container:$container},obj.unbindEvents)};obj.ready=function(){if(!tribe.events.views.manager){return}
$document.on('afterSetup.tribeEvents',tribe.events.views.manager.selectors.container,obj.bindEvents)};$(obj.ready)})(jQuery,tribe.events.views.accordion)
;