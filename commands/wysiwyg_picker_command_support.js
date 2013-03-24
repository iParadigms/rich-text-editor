/*-------------------------------------------------------------------------------------------------
 - Project:   Sproutcore WYSIWYG                                                                  -
 - Copyright: ©2012 Matygo Educational Incorporated operating as Learndot                         -
 - Author:    Joe Gaudet (joe@learndot.com) and contributors (see contributors.txt)               -
 - License:   Licensed under MIT license (see license.js)                                         -
 -------------------------------------------------------------------------------------------------*/
/*globals SproutCoreWysiwyg */
sc_require('panes/wysiwyg_command_picker_pane');

/**
 * @mixin
 * 
 * Support for a command to popup a SC.PickerPane
 */
SC.WYSIWYGPickerCommandSupport = {

	/**
	 * Quack like a duck
	 */
	isWYSIWYGPickerCommandSupport: YES,

	/**
	 * Wired up.
	 * 
	 * @param source
	 *            {SC.View}
	 * @param controller
	 *            {SC.WYSIWYGController}
	 */
	execute: function(source, controller) {
		controller.saveSelection();
		this._popup(source, controller);
	},

	/**
	 * Executed by dismissing the pane, should be enhanced to restore the text
	 * selection before executing.
	 * 
	 * @param controller
	 *            {SC.WYSIWYGController}
	 */
	commitCommand: function(controller) {
		controller.restoreSavedSelection();
	},
	
	cancelCommand: function(controller) {
		controller.restoreSavedSelection();
	},

	/**
	 * Pop up the panel
	 * 
	 * @param anchor
	 *            {SC.View}
	 * @param controller{SC.WYSIWYGController}
	 */
	_popup: function(anchor, controller) {
		if (this.exempleView) this.exempleView.create({
			controller: controller,
			command: this
		}).popup(anchor, SC.PICKER_POINTER, [ 2, 3, 0, 1, 2 ]);
	}
};
