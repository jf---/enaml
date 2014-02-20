#------------------------------------------------------------------------------
# Copyright (c) 2014, Nucleic Development Team.
#
# Distributed under the terms of the Modified BSD License.
#
# The full license is in the file COPYING.txt, distributed with this software.
#------------------------------------------------------------------------------
from enaml.application import Application, ProxyResolver

from .web_factories import WEB_FACTORIES


class WebApplication(Application):
    """ A web implementation of an Enaml application.

    """
    def __init__(self):
        """ Initialize a WebApplication.

        """
        super(WebApplication, self).__init__()
        self.resolver = ProxyResolver(factories=WEB_FACTORIES)

    def send_message(self, message):
        pass

    def recv_message(self, message):
        pass

    #--------------------------------------------------------------------------
    # Abstract API Implementation
    #--------------------------------------------------------------------------
    def start(self):
        """ Start the application's main event loop.

        """
        pass

    def stop(self):
        """ Stop the application's main event loop.

        """
        pass

    def deferred_call(self, callback, *args, **kwargs):
        """ Invoke a callable on the next cycle of the main event loop
        thread.

        Parameters
        ----------
        callback : callable
            The callable object to execute at some point in the future.

        *args, **kwargs
            Any additional positional and keyword arguments to pass to
            the callback.

        """
        pass

    def timed_call(self, ms, callback, *args, **kwargs):
        """ Invoke a callable on the main event loop thread at a
        specified time in the future.

        Parameters
        ----------
        ms : int
            The time to delay, in milliseconds, before executing the
            callable.

        callback : callable
            The callable object to execute at some point in the future.

        *args, **kwargs
            Any additional positional and keyword arguments to pass to
            the callback.

        """
        pass

    def is_main_thread(self):
        """ Indicates whether the caller is on the main gui thread.

        Returns
        -------
        result : bool
            True if called from the main gui thread. False otherwise.

        """
        pass
