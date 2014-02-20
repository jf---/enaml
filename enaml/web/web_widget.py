#------------------------------------------------------------------------------
# Copyright (c) 2014, Nucleic Development Team.
#
# Distributed under the terms of the Modified BSD License.
#
# The full license is in the file COPYING.txt, distributed with this software.
#------------------------------------------------------------------------------
from enaml.colors import color_string
from enaml.fonts import font_string
from enaml.widgets.widget import ProxyWidget

from .web_toolkit_object import WebToolkitObject


class WebWidget(WebToolkitObject, ProxyWidget):
    """ A web implementation of an Enaml ProxyWidget.

    """
    def initial_state(self):
        """ Get the initial state of the widget.

        """
        state = super(WebWidget, self).initial_state()
        d = self.declaration
        state[u'enabled'] = d.enabled
        state[u'visible'] = d.visible
        state[u'background'] = color_string(d.background)
        state[u'foreground'] = color_string(d.foreground)
        state[u'font'] = font_string(d.font)
        state[u'tool_tip'] = d.tool_tip
        state[u'status_tip'] = d.status_tip
        # minimum_size
        # maximum_size

    #--------------------------------------------------------------------------
    # ProxyWidget API
    #--------------------------------------------------------------------------
    def set_minimum_size(self, min_size):
        """ Sets the minimum size of the widget.

        """

    def set_maximum_size(self, max_size):
        """ Sets the maximum size of the widget.

        """

    def set_enabled(self, enabled):
        """ Set the enabled state of the widget.

        """

    def set_visible(self, visible):
        """ Set the visibility of the widget.

        """

    def set_background(self, background):
        """ Set the background color of the widget.

        """

    def set_foreground(self, foreground):
        """ Set the foreground color of the widget.

        """

    def set_font(self, font):
        """ Set the font of the widget.

        """

    def set_show_focus_rect(self, show):
        """ Set whether or not to show the focus rect.

        This feature is not supported by the web backend.

        """
        pass

    def set_tool_tip(self, tool_tip):
        """ Set the tool tip for the widget.

        """

    def set_status_tip(self, status_tip):
        """ Set the status tip for the widget.

        """

    def ensure_visible(self):
        """ Ensure the widget is visible.

        """

    def ensure_hidden(self):
        """ Ensure the widget is hidden.

        """

    def restyle(self):
        """ Restyle the widget with the current style data.

        """
