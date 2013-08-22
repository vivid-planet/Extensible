Ext.data.JsonP.Extensible_calendar_gadget_CalendarListPanel({"tagname":"class","name":"Extensible.calendar.gadget.CalendarListPanel","extends":"Ext.Panel","mixins":[],"alternateClassNames":[],"aliases":{"widget":["extensible.calendarlist"]},"singleton":false,"requires":["Ext.XTemplate","Extensible.calendar.gadget.CalendarListMenu"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Extensible.calendar.gadget.CalendarListPanel","code_type":"ext_define","members":{"cfg":[{"name":"store","tagname":"cfg","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{},"id":"cfg-store"}],"property":[{"name":"autoHeight","tagname":"property","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"property-autoHeight"},{"name":"collapsible","tagname":"property","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"property-collapsible"},{"name":"layout","tagname":"property","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"property-layout"},{"name":"menuSelector","tagname":"property","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"property-menuSelector"},{"name":"title","tagname":"property","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"property-title"},{"name":"width","tagname":"property","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"property-width"}],"method":[{"name":"constructor","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{},"id":"method-constructor"},{"name":"afterRender","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-afterRender"},{"name":"getCalendarId","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-getCalendarId"},{"name":"getCalendarItemEl","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-getCalendarItemEl"},{"name":"getColorCls","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-getColorCls"},{"name":"getListTemplate","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-getListTemplate"},{"name":"handleColorChange","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-handleColorChange"},{"name":"handleRadioCalendar","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-handleRadioCalendar"},{"name":"hideCalendar","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-hideCalendar"},{"name":"initComponent","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-initComponent"},{"name":"onClick","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-onClick"},{"name":"onMouseOut","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-onMouseOut"},{"name":"onMouseOver","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-onMouseOver"},{"name":"onUpdate","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-onUpdate"},{"name":"radioCalendar","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-radioCalendar"},{"name":"refresh","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{},"id":"method-refresh"},{"name":"setStore","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{},"id":"method-setStore"},{"name":"showCalendar","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-showCalendar"},{"name":"showEventMenu","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-showEventMenu"},{"name":"toggleCalendar","tagname":"method","owner":"Extensible.calendar.gadget.CalendarListPanel","meta":{"private":true},"id":"method-toggleCalendar"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"CalendarListPanel.js","href":"CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Panel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Panel<div class='subclass '><strong>Extensible.calendar.gadget.CalendarListPanel</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.XTemplate</div><div class='dependency'>Extensible.calendar.gadget.CalendarListMenu</div><h4>Files</h4><div class='dependency'><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel' target='_blank'>CalendarListPanel.js</a></div></pre><div class='doc-contents'><p>This is a panel subclass that renders a list of available calendars</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-store' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-cfg-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-cfg-store' class='name expandable'>store</a><span> : Ext.data.Store</span></div><div class='description'><div class='short'>A store containing records of type CalendarRecord. ...</div><div class='long'><p>A store containing records of type <a href=\"#!/api/Extensible.calendar.data.CalendarModel\" rel=\"Extensible.calendar.data.CalendarModel\" class=\"docClass\">CalendarRecord</a>.\nThis is a required config and is used to populate the calendar list.  The CalendarList widget will also listen for events from\nthe store and automatically refresh iteself in the event that the underlying calendar records in the store change.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-autoHeight' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-property-autoHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-property-autoHeight' class='name expandable'>autoHeight</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-collapsible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-property-collapsible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-property-collapsible' class='name expandable'>collapsible</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-property-layout' class='name expandable'>layout</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'fit'</code></p></div></div></div><div id='property-menuSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-property-menuSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-property-menuSelector' class='name expandable'>menuSelector</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'em'</code></p></div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-property-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-property-title' class='name expandable'>title</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Calendars'</code></p></div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-property-width' class='name expandable'>width</a><span> : Number</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>100</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-constructor' class='name expandable'>Extensible.calendar.gadget.CalendarListPanel</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Extensible.calendar.gadget.CalendarListPanel\" rel=\"Extensible.calendar.gadget.CalendarListPanel\" class=\"docClass\">Extensible.calendar.gadget.CalendarListPanel</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Extensible.calendar.gadget.CalendarListPanel\" rel=\"Extensible.calendar.gadget.CalendarListPanel\" class=\"docClass\">Extensible.calendar.gadget.CalendarListPanel</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-afterRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-afterRender' class='name expandable'>afterRender</a>( <span class='pre'>ct, position</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>position</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCalendarId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-getCalendarId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-getCalendarId' class='name expandable'>getCalendarId</a>( <span class='pre'>el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCalendarItemEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-getCalendarItemEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-getCalendarItemEl' class='name expandable'>getCalendarItemEl</a>( <span class='pre'>calendarId</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>calendarId</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getColorCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-getColorCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-getColorCls' class='name expandable'>getColorCls</a>( <span class='pre'>colorId</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>colorId</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getListTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-getListTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-getListTemplate' class='name expandable'>getListTemplate</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-handleColorChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-handleColorChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-handleColorChange' class='name expandable'>handleColorChange</a>( <span class='pre'>menu, id, colorId, origColorId</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>menu</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>colorId</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>origColorId</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleRadioCalendar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-handleRadioCalendar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-handleRadioCalendar' class='name expandable'>handleRadioCalendar</a>( <span class='pre'>menu, id</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>menu</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hideCalendar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-hideCalendar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-hideCalendar' class='name expandable'>hideCalendar</a>( <span class='pre'>id, commit</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>commit</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-onClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-onClick' class='name expandable'>onClick</a>( <span class='pre'>e, t</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>t</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onMouseOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-onMouseOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-onMouseOut' class='name expandable'>onMouseOut</a>( <span class='pre'>e, t</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>t</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onMouseOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-onMouseOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-onMouseOver' class='name expandable'>onMouseOver</a>( <span class='pre'>e, t</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>t</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-onUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-onUpdate' class='name expandable'>onUpdate</a>( <span class='pre'>ds, rec, operation</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ds</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>rec</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>operation</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-radioCalendar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-radioCalendar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-radioCalendar' class='name expandable'>radioCalendar</a>( <span class='pre'>id</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-refresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-refresh' class='name expandable'>refresh</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Refreshes the calendar list so that it displays based on the most current state of\nthe underlying calendar store. ...</div><div class='long'><p>Refreshes the calendar list so that it displays based on the most current state of\nthe underlying calendar store. Usually this method does not need to be called directly\nas the control is automatically bound to the store's events, but it is available in the\nevent that a manual refresh is ever needed.</p>\n</div></div></div><div id='method-setStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-setStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-setStore' class='name expandable'>setStore</a>( <span class='pre'>store</span> )</div><div class='description'><div class='short'>Sets the store used to display the available calendars. ...</div><div class='long'><p>Sets the store used to display the available calendars. It should contain\nrecords of type <a href=\"#!/api/Extensible.calendar.data.CalendarModel\" rel=\"Extensible.calendar.data.CalendarModel\" class=\"docClass\">CalendarRecord</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-showCalendar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-showCalendar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-showCalendar' class='name expandable'>showCalendar</a>( <span class='pre'>id, commit</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>commit</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-showEventMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-showEventMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-showEventMenu' class='name expandable'>showEventMenu</a>( <span class='pre'>el, xy</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>xy</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toggleCalendar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.gadget.CalendarListPanel'>Extensible.calendar.gadget.CalendarListPanel</span><br/><a href='source/CalendarListPanel.html#Extensible-calendar-gadget-CalendarListPanel-method-toggleCalendar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.gadget.CalendarListPanel-method-toggleCalendar' class='name expandable'>toggleCalendar</a>( <span class='pre'>id, commit</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>commit</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});