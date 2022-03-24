/*!/wp-content/plugins/the-events-calendar/src/resources/js/views/breakpoints.js*/
tribe.events=tribe.events||{};tribe.events.views=tribe.events.views||{};tribe.events.views.breakpoints={};(function($,obj){'use strict';var $document=$(document);obj.selectors={container:'[data-js="tribe-events-view"]',dataScript:'[data-js="tribe-events-view-data"]',breakpointClassPrefix:'tribe-common--breakpoint-',};obj.breakpoints={};obj.setContainerClasses=function($container,data){var breakpoints=Object.keys(data.breakpoints);breakpoints.forEach(function(breakpoint){var className=obj.selectors.breakpointClassPrefix+breakpoint;obj.breakpoints[breakpoint]=data.breakpoints[breakpoint];if($container.outerWidth()<data.breakpoints[breakpoint]){$container.removeClass(className)}else{$container.addClass(className)}})};obj.handleResize=function(event){obj.setContainerClasses(event.data.container,event.data.data)};obj.unbindEvents=function($container){$container.off('resize.tribeEvents',obj.handleResize).off('beforeAjaxSuccess.tribeEvents',obj.deinit)};obj.bindEvents=function($container,data){$container.on('resize.tribeEvents',{container:$container,data:data},obj.handleResize).on('beforeAjaxSuccess.tribeEvents',{container:$container},obj.deinit)};obj.deinit=function(event,jqXHR,settings){obj.unbindEvents(event.data.container)};obj.initTasks=function($container,data){if(!($container instanceof jQuery)){$container=$($container)}
obj.bindEvents($container,data);obj.setContainerClasses($container,data);var state={initialized:!0};$container.data('tribeEventsBreakpoints',state)};obj.init=function(event,index,$container,data){if(!($container instanceof jQuery)){$container=$($container)}
var state=$container.data('tribeEventsBreakpoints');if(state&&state.initialized){return}
obj.initTasks($container,data)};obj.setup=function(container){var $container=$(container);if(!$container.is(obj.selectors.container)){return}
var $data=$container.find(obj.selectors.dataScript);var data={};if($data.length){data=JSON.parse($data.text().trim())}
obj.initTasks($container,data)};obj.ready=function(){$document.on('afterSetup.tribeEvents',obj.selectors.container,obj.init)};$(obj.ready)})(jQuery,tribe.events.views.breakpoints)
;