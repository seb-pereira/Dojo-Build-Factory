
				
use = function use(){var t = [];for(var i=0;i<arguments.length;++i)t.push(__layersFeatures[arguments[i]]);return Array.prototype.concat.apply([], t);};
__layersFeatures = {};

			__layersFeatures.calendar = [
	"dojox/calendar/_RendererMixin",
	"dojox/calendar/_VerticalScrollBarBase",
	"dojox/calendar/Calendar",
	"dojox/calendar/CalendarBase",
	"dojox/calendar/ColumnView",
	"dojox/calendar/ColumnViewSecondarySheet",
	"dojox/calendar/ExpandRenderer",
	"dojox/calendar/HorizontalRenderer",
	"dojox/calendar/Keyboard",
	"dojox/calendar/LabelRenderer",
	"dojox/calendar/MatrixView",
	"dojox/calendar/MobileCalendar",
	"dojox/calendar/MobileHorizontalRenderer",
	"dojox/calendar/MobileVerticalRenderer",
	"dojox/calendar/MonthColumnView",
	"dojox/calendar/Mouse",
	"dojox/calendar/SimpleColumnView",
	"dojox/calendar/StoreMixin",
	"dojox/calendar/time",
	"dojox/calendar/Touch",
	"dojox/calendar/VerticalRenderer",
	"dojox/calendar/ViewBase",
	"dojox/widget/_Invalidating",
	"dojox/widget/Selection",
	"dojox/html/metrics"
];__layersFeatures.charting = [
	"dojo/fx/easing",					//charting
	"dojox/color/_base",				//charting
	"dojox/color/Palette",				//charting
	"dojox/lang/functional",			//charting
	"dojox/lang/functional/array",		//charting
	"dojox/lang/functional/fold",		//charting
	"dojox/lang/functional/lambda",		//charting
	"dojox/lang/functional/object",		//charting
	"dojox/lang/functional/reversed",	//charting
	"dojox/lang/functional/scan",		//charting
	"dojox/lang/functional/sequence",	//charting
	"dojox/lang/utils",					//charting
	"dojox/gesture/tap",				//charting
	"dojox/gesture/Base",				//charting
	"dojox/string/BidiEngine",			//charting
	"dojox/charting/BidiSupport",
	"dojox/charting/Chart",
	"dojox/charting/Chart2D",
	"dojox/charting/DataChart",
	"dojox/charting/DataSeries",
	"dojox/charting/Element",
	"dojox/charting/Series",
	"dojox/charting/StoreSeries",
	"dojox/charting/Theme",
	"dojox/charting/action2d/_IndicatorElement",
	"dojox/charting/action2d/Base",
	"dojox/charting/action2d/ChartAction",
	"dojox/charting/action2d/Highlight",
	"dojox/charting/action2d/Magnify",
	"dojox/charting/action2d/MouseIndicator",
	"dojox/charting/action2d/MouseZoomAndPan",
	"dojox/charting/action2d/MoveSlice",
	"dojox/charting/action2d/PlotAction",
	"dojox/charting/action2d/Shake",
	"dojox/charting/action2d/Tooltip",
	"dojox/charting/action2d/TouchIndicator",
	"dojox/charting/action2d/TouchZoomAndPan",
	"dojox/charting/axis2d/Base",
	"dojox/charting/axis2d/common",
	"dojox/charting/axis2d/Default",
	"dojox/charting/axis2d/Invisible",
	"dojox/charting/plot2d/_PlotEvents",
	"dojox/charting/plot2d/Areas",
	"dojox/charting/plot2d/Bars",
	"dojox/charting/plot2d/Base",
	"dojox/charting/plot2d/Bubble",
	"dojox/charting/plot2d/Candlesticks",
	"dojox/charting/plot2d/ClusteredBars",
	"dojox/charting/plot2d/ClusteredColumns",
	"dojox/charting/plot2d/Columns",
	"dojox/charting/plot2d/common",
	"dojox/charting/plot2d/Default",
	"dojox/charting/plot2d/Grid",
	"dojox/charting/plot2d/Lines",
	"dojox/charting/plot2d/Markers",
	"dojox/charting/plot2d/MarkersOnly",
	"dojox/charting/plot2d/OHLC",
	"dojox/charting/plot2d/Pie",
	"dojox/charting/plot2d/Scatter",
	"dojox/charting/plot2d/Spider",
	"dojox/charting/plot2d/Stacked",
	"dojox/charting/plot2d/StackedAreas",
	"dojox/charting/plot2d/StackedBars",
	"dojox/charting/plot2d/StackedColumns",
	"dojox/charting/plot2d/StackedLines",
	"dojox/charting/scaler/common",
	"dojox/charting/scaler/linear",
	"dojox/charting/scaler/primitive",
	"dojox/charting/themes/common",
	"dojox/charting/themes/Julie",
	"dojox/charting/themes/gradientGenerator",
	"dojox/charting/widget/BidiSupport",
	"dojox/charting/widget/Chart",
	"dojox/charting/widget/Chart2D",
	"dojox/charting/widget/Legend",
	"dojox/charting/widget/SelectableLegend",
	"dojox/charting/widget/Sparkline"
];__layersFeatures.colorpalette = [
	"dijit/ColorPalette"
];__layersFeatures.common_ui = [
	"dijit/_base/manager", //mobile, treemap
	"dijit/_BidiSupport", //charting
	"dijit/_Contained", //mobile
	"dijit/_Container", //mobile
	"dijit/_CssStateMixin", //charting
	"dijit/_FocusMixin", //charting, treemap
	"dijit/_KeyNavContainer", // calendar
	"dijit/_OnDijitClickMixin", //charting
	"dijit/_TemplatedMixin",//charting
	"dijit/_Widget", //charting
	"dijit/_WidgetBase", //mobile
	"dijit/_WidgetsInTemplateMixin", // calendar
	"dijit/a11y", //mobile
	"dijit/BackgroundIframe", //charting
	"dijit/focus", //charting
	"dijit/form/_ButtonMixin", //mobile
	"dijit/form/_CheckBoxMixin", //mobile
	"dijit/form/_ExpandingTextAreaMixin", //mobile
	"dijit/form/_FormValueMixin", //mobile
	"dijit/form/_FormWidget", //charting
	"dijit/form/_FormWidgetMixin", //mobile
	"dijit/form/_ListBase", // mobile
	"dijit/form/_RadioButtonMixin", //mobile
	"dijit/form/_TextBoxMixin", //mobile
	"dijit/form/_ToggleButtonMixin", //mobile
	"dijit/form/Button",//charting
	"dijit/form/CheckBox", //charting
	"dijit/form/ToggleButton", //charting
	"dijit/hccss", //charting
	"dijit/main", // mobile, treemap
	"dijit/place", // mobile
	"dijit/registry", // mobile, treemap
	"dijit/ToolbarSeparator", // calendar
	"dijit/Tooltip", // charting,
	"dijit/Toolbar"	// calendar
];__layersFeatures.dgauges = [
	"dojox/dgauges/_circularUtils",
	"dojox/dgauges/CircularGauge",
	"dojox/dgauges/CircularRangeIndicator",
	"dojox/dgauges/CircularScale",
	"dojox/dgauges/CircularValueIndicator",
	"dojox/dgauges/GaugeBase",
	"dojox/dgauges/IndicatorBase",
	"dojox/dgauges/LinearScaler",
	"dojox/dgauges/LogScaler",
	"dojox/dgauges/MultiLinearScaler",
	"dojox/dgauges/RectangularGauge",
	"dojox/dgauges/RectangularRangeIndicator",
	"dojox/dgauges/RectangularScale",
	"dojox/dgauges/RectangularSegmentedRangeIndicator",
	"dojox/dgauges/RectangularValueIndicator",
	"dojox/dgauges/ScaleBase",
	"dojox/dgauges/ScaleIndicatorBase",
	"dojox/dgauges/TextIndicator",
	"dojox/dgauges/components/DefaultPropertiesMixin",
	"dojox/dgauges/components/utils",
	"dojox/dgauges/components/default/CircularLinearGauge",
	"dojox/dgauges/components/default/HorizontalLinearGauge",
	"dojox/dgauges/components/default/SemiCircularLinearGauge",
	"dojox/dgauges/components/default/VerticalLinearGauge",
	"dojox/widget/_Invalidating",
];__layersFeatures.dijit = [
	"dijit/_base",
	"dijit/_base/focus",
	"dijit/_base/place",
	"dijit/_base/popup",
	"dijit/_base/scroll",
	"dijit/_base/sniff",
	"dijit/_base/typematic",
	"dijit/_base/wai",
	"dijit/_base/window",
	"dijit/_Calendar",
	"dijit/_DialogMixin",
	"dijit/_editor/_Plugin",
	"dijit/_editor/html",
	"dijit/_editor/nls/commands",
	"dijit/_editor/nls/FontChoice",
	"dijit/_editor/plugins/EnterKeyHandling",
	"dijit/_editor/plugins/FontChoice",
	"dijit/_editor/plugins/LinkDialog",
	"dijit/_editor/range",
	"dijit/_editor/RichText",
	"dijit/_editor/selection",
	"dijit/_HasDropDown",
	"dijit/_MenuBase",
	"dijit/_PaletteMixin",
	"dijit/_Templated",
	"dijit/_TimePicker",
	"dijit/Calendar",
	"dijit/CalendarLite",
	"dijit/CheckedMenuItem",
	"dijit/ColorPalette",
	"dijit/Declaration",
	"dijit/Dialog",
	"dijit/DialogUnderlay",
	"dijit/dijit",
	"dijit/DropDownMenu",
	"dijit/Editor",
	"dijit/form/_AutoCompleterMixin",
	"dijit/form/_ComboBoxMenu",
	"dijit/form/_ComboBoxMenuMixin",
	"dijit/form/_DateTimeTextBox",
	"dijit/form/_FormMixin",
	"dijit/form/_FormSelectWidget",
	"dijit/form/_FormValueWidget",
	"dijit/form/_ListMouseMixin",
	"dijit/form/_Spinner",
	"dijit/form/ComboBox",
	"dijit/form/ComboBoxMixin",
	"dijit/form/ComboButton",
	"dijit/form/CurrencyTextBox",
	"dijit/form/DataList",
	"dijit/form/DateTextBox",
	"dijit/form/DropDownButton",
	"dijit/form/FilteringSelect",
	"dijit/form/Form",
	"dijit/form/HorizontalRule",
	"dijit/form/HorizontalRuleLabels",
	"dijit/form/HorizontalSlider",
	"dijit/form/MappedTextBox",
	"dijit/form/MultiSelect",
	"dijit/form/nls/ComboBox",
	"dijit/form/nls/validate",
	"dijit/form/NumberSpinner",
	"dijit/form/NumberTextBox",
	"dijit/form/RadioButton",
	"dijit/form/RangeBoundTextBox",
	"dijit/form/Select",
	"dijit/form/SimpleTextarea",
	"dijit/form/Slider",
	"dijit/form/Textarea",
	"dijit/form/TextBox",
	"dijit/form/TimeTextBox",
	"dijit/form/ValidationTextBox",
	"dijit/form/VerticalRule",
	"dijit/form/VerticalRuleLabels",
	"dijit/form/VerticalSlider",
	"dijit/InlineEditBox",
	"dijit/layout/_ContentPaneResizeMixin",
	"dijit/layout/_LayoutWidget",
	"dijit/layout/_TabContainerBase",
	"dijit/layout/AccordionContainer",
	"dijit/layout/AccordionPane",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/layout/LayoutContainer",
	"dijit/layout/LinkPane",
	"dijit/layout/ScrollingTabController",
	"dijit/layout/SplitContainer",
	"dijit/layout/StackContainer",
	"dijit/layout/StackController",
	"dijit/layout/TabContainer",
	"dijit/layout/TabController",
	"dijit/layout/utils",
	"dijit/Menu",
	"dijit/MenuBar",
	"dijit/MenuBarItem",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"dijit/nls/common",
	"dijit/nls/loading",
	"dijit/popup",
	"dijit/PopupMenuBarItem",
	"dijit/PopupMenuItem",
	"dijit/ProgressBar",
	"dijit/TitlePane",
	"dijit/TooltipDialog",
	"dijit/Tree",
	"dijit/tree/_dndContainer",
	"dijit/tree/_dndSelector",
	"dijit/tree/dndSource",
	"dijit/tree/model",
	"dijit/tree/ForestStoreModel",
	"dijit/tree/ObjectStoreModel",
	"dijit/tree/TreeStoreModel",
	"dijit/typematic",
	"dijit/WidgetSet"

];
__layersFeatures.dijitcalendar = [
	"dijit/Calendar"
];__layersFeatures.dojo_core_web = [
	"dojo/_base/array",
	"dojo/_base/Color",
	"dojo/_base/config",
	"dojo/_base/connect",
	"dojo/_base/declare",
	"dojo/_base/Deferred",
	"dojo/_base/event",
	"dojo/_base/fx",
	"dojo/_base/html",
	"dojo/_base/json",
	"dojo/_base/kernel",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/unload",
	"dojo/_base/window",
	"dojo/_base/xhr",
	"dojo/aspect",
	"dojo/cldr/monetary",
	"dojo/cldr/supplemental",
	"dojo/cldr/nls/gregorian",
	"dojo/cldr/nls/currency",
	"dojo/colors",
	"dojo/date",
	"dojo/cookie",
	"dojo/currency",
	"dojo/date/locale",
	"dojo/DeferredList",
	"dojo/dom",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-form",
	"dojo/dom-geometry",
	"dojo/dom-prop",
	"dojo/domReady",
	"dojo/dom-style",
	"dojo/Evented",
	"dojo/fx",
	"dojo/fx/easing",
	"dojo/has",
	//"dojo/i18n", //: see http://bugs.dojotoolkit.org/ticket/14947
	"dojo/io-query",
	"dojo/json",
	"dojo/keys",
	"dojo/main",
	"dojo/mouse",
	"dojo/on",
	"dojo/parser",
	"dojo/query",
	"dojo/ready",
	"dojo/regexp",
	"dojo/selector/_loader",
	"dojo/selector/acme",
	"dojo/Stateful",
	"dojo/string",
	"dojo/fx/Toggler",
	"dojo/topic",
	"dojo/touch",
	"dojo/uacss",
	"dojo/window"
];
__layersFeatures.graphics = [
	"dojox/gfx",
	"dojox/gfx/_base",
	"dojox/gfx/arc",
	"dojox/gfx/_gfxBidiSupport",
	"dojox/gfx/renderer",
	"dojox/gfx/canvasWithEvents",
	"dojox/gfx/decompose",
	"dojox/gfx/fx",
	"dojox/gfx/gradient",
	"dojox/gfx/gradutils",
	"dojox/gfx/matrix",
	"dojox/gfx/Moveable",
	"dojox/gfx/Mover",
	"dojox/gfx/path",
	"dojox/gfx/shape",
	"dojox/gfx/svg",
	"dojox/gfx/utils",
	"dojox/gfx/VectorText",
	"dojox/gfx/move"
];__layersFeatures.mobile = [
	"dojox/css3/fx",
	"dojox/css3/transit",
	"dojox/css3/transition",
	"dojox/mobile",
	"dojox/mobile/_base",
	"dojox/mobile/_EditableIconMixin",
	"dojox/mobile/_EditableListMixin",
	"dojox/mobile/_ExecScriptMixin",
	"dojox/mobile/_DataListMixin",
	"dojox/mobile/_ItemBase",
	"dojox/mobile/_IconItemPane",
	"dojox/mobile/_ListTouchMixin",
	"dojox/mobile/_ScrollableMixin",
	"dojox/mobile/Accordion",
	"dojox/mobile/Audio",
	"dojox/mobile/Button",
	"dojox/mobile/Carousel",
	"dojox/mobile/CarouselItem",
	"dojox/mobile/CheckBox",
	"dojox/mobile/ComboBox", // experimental	
	"dojox/mobile/common",
	"dojox/mobile/compat",
	"dojox/mobile/ContentPane",
	"dojox/mobile/DataCarousel",
	"dojox/mobile/DatePicker",
	"dojox/mobile/EdgeToEdgeCategory",
	"dojox/mobile/EdgeToEdgeDataList",
	"dojox/mobile/EdgeToEdgeList",
	"dojox/mobile/EdgeToEdgeStoreList",
	"dojox/mobile/ExpandingTextArea",
	"dojox/mobile/FixedSplitter",
	"dojox/mobile/FixedSplitterPane",
	"dojox/mobile/GridLayout",
	"dojox/mobile/Heading",
	"dojox/mobile/i18n",
	"dojox/mobile/Icon",
	"dojox/mobile/IconContainer",
	"dojox/mobile/IconItem",
	"dojox/mobile/IconMenu",
	"dojox/mobile/IconMenuItem",
	"dojox/mobile/iconUtils",
	"dojox/mobile/lazyLoadUtils",
	"dojox/mobile/ListItem",
	"dojox/mobile/Opener",
	"dojox/mobile/Overlay",
	"dojox/mobile/PageIndicator",
	"dojox/mobile/Pane",
	//"dojox/mobile/parser",
	"dojox/mobile/ProgressBar",
	"dojox/mobile/ProgressIndicator",
	"dojox/mobile/RadioButton",
	"dojox/mobile/Rating",
	"dojox/mobile/RoundRect",
	"dojox/mobile/RoundRectCategory",
	"dojox/mobile/RoundRectDataList",
	"dojox/mobile/RoundRectList",
	"dojox/mobile/RoundRectStoreList",
	"dojox/mobile/ScreenSizeAware", // experimental
	"dojox/mobile/scrollable",
	"dojox/mobile/ScrollablePane",
	"dojox/mobile/ScrollableView",
	"dojox/mobile/SearchBox",
	"dojox/mobile/SimpleDialog",
	"dojox/mobile/Slider",
	"dojox/mobile/sniff",
	"dojox/mobile/SpinWheel",
	"dojox/mobile/SpinWheelDatePicker",
	"dojox/mobile/SpinWheelSlot",
	"dojox/mobile/SpinWheelTimePicker",
	"dojox/mobile/StoreCarousel",
	"dojox/mobile/SwapView",
	"dojox/mobile/Switch",
	"dojox/mobile/TabBar",
	"dojox/mobile/TabBarButton",
	"dojox/mobile/TextArea",
	"dojox/mobile/TextBox",
	"dojox/mobile/TimePicker",
	"dojox/mobile/ToggleButton",
	"dojox/mobile/ToolBarButton",
	"dojox/mobile/Tooltip",
	"dojox/mobile/transition",
	"dojox/mobile/TransitionEvent",
	"dojox/mobile/TreeView", // experimental
	"dojox/mobile/ValuePicker",
	"dojox/mobile/ValuePickerDatePicker",
	"dojox/mobile/ValuePickerSlot",
	"dojox/mobile/ValuePickerTimePicker",
	"dojox/mobile/Video",				
	"dojox/mobile/View",
	"dojox/mobile/ViewController",
	"dojox/mobile/viewRegistry",
	"dojox/mobile/dh/ContentTypeMap",
	"dojox/mobile/dh/DataHandler",
	"dojox/mobile/dh/HtmlContentHandler",
	"dojox/mobile/dh/HtmlScriptContentHandler",
	"dojox/mobile/dh/JsonContentHandler",
	"dojox/mobile/dh/PatternFileTypeMap",
	"dojox/mobile/dh/StringDataSource",
	"dojox/mobile/dh/SuffixFileTypeMap",
	"dojox/mobile/dh/UrlDataSource"
];__layersFeatures.mobile_compat = [
    "dojox/mobile/_compat",
    "dojox/fx",
    "dojox/fx/flip"
];
__layersFeatures.treemap = [
	"dojox/treemap/_utils",
	"dojox/treemap/DrillDownUp",
	"dojox/treemap/GroupLabel",
	"dojox/treemap/Keyboard",
	"dojox/treemap/ScaledLabel",
	"dojox/treemap/TreeMap",
	"dojox/widget/_Invalidating",
	"dojox/widget/Selection"	
];