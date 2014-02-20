#------------------------------------------------------------------------------
# Copyright (c) 2014, Nucleic Development Team.
#
# Distributed under the terms of the Modified BSD License.
#
# The full license is in the file COPYING.txt, distributed with this software.
#------------------------------------------------------------------------------
from enaml.widgets.window import ProxyWindow

from .web_widget import WebWidget


class WebWindow(WebWidget, ProxyWindow):
    """ A web implementation of an Enaml ProxyWindow.

    """
    def initial_state(self):
        """ Get the initial state of the window.

        """
        state = super(WebWindow, self).initial_state()
        d = self.declaration
        cw = self.central_widget()
        state[u'title'] = d.title
        state[u'central_widget'] = cw.object_id if cw else u''
        # initial_size
        # initial_position
        # modality
        # icon

    #--------------------------------------------------------------------------
    # Public API
    #--------------------------------------------------------------------------
    def central_widget(self):
        """ Find and return the central widget child for this widget.

        Returns
        -------
        result : WebContainer or None
            The central widget container defined for this widget, or
            None if one is not defined.

        """
        d = self.declaration.central_widget()
        if d is not None:
            return d.proxy.widget

    #--------------------------------------------------------------------------
    # Child Events
    #--------------------------------------------------------------------------
    def child_added(self, child):
        """ Handle the child added event for a WebWindow.

        """

    def child_removed(self, child):
        """ Handle the child added event for a WebWindow.

        """

    #--------------------------------------------------------------------------
    # ProxyWindow API
    #--------------------------------------------------------------------------
    def set_title(self, title):
        """ Set the title of the window.

        """

    def set_modality(self, modality):
        """ Set the modality of the window.

        """

    def set_icon(self, icon):
        """ Set the window icon.

        """

    def position(self):
        """ Get the position of the window.

        """

    def set_position(self, pos):
        """ Set the position of the window.

        """

    def size(self):
        """ Get the size of the window.

        """

    def set_size(self, size):
        """ Set the size of the window.

        """

    def geometry(self):
        """ Get the geometry of the window.

        """

    def set_geometry(self, rect):
        """ Set the geometry of the window.

        """

    def frame_geometry(self):
        """ Get the geometry of the window.

        """

    def maximize(self):
        """ Maximize the window.

        """

    def is_maximized(self):
        """ Get whether the window is maximized.

        """

    def minimize(self):
        """ Minimize the window.

        """

    def is_minimized(self):
        """ Get whether the window is minimized.

        """

    def restore(self):
        """ Restore the window after a minimize or maximize.

        """

    def send_to_front(self):
        """ Move the window to the top of the Z order.

        """

    def send_to_back(self):
        """ Move the window to the bottom of the Z order.

        """

    def activate_window(self):
        """ Activate the underlying window widget.

        """

    def center_on_screen(self):
        """ Center the window on the screen.

        """

    def center_on_widget(self, other):
        """ Center the window on another widget.

        """

    def close(self):
        """ Close the window.

        """
