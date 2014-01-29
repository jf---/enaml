#------------------------------------------------------------------------------
# Copyright (c) 2013, Nucleic Development Team.
#
# Distributed under the terms of the Modified BSD License.
#
# The full license is in the file COPYING.txt, distributed with this software.
#------------------------------------------------------------------------------
from atom.api import Atom, Typed, Unicode


class Extension(Atom):
    """ A class which represents an extension point declaration.

    """
    #: The identifier of the plugin which declared the extension.
    _plugin_id = Unicode()

    #: The dict of data loaded from the json declaration.
    _data = Typed(dict)

    def __init__(self, plugin_id, data):
        """ Initialize an Extension.

        Parameters
        ----------
        plugin_id : unicode
            The identifer of the plugin to which this extension
            belongs.

        data : dict
            The dict loaded from the JSON file which describes
            the extension.

        """
        self._plugin_id = plugin_id
        self._data = data

    @property
    def plugin_id(self):
        """ Get the identifer of the extension's plugin.

        """
        return self._plugin_id

    @property
    def point(self):
        """ Get the identifier of the contribution extension point.

        """
        return self._data[u'point']

    @property
    def id(self):
        """ Get the extension identifer.

        """
        return self._data[u'id']

    @property
    def qualified_id(self):
        """ Get the fully qualified extension identifer.

        """
        this_id = self._data[u'id']
        if u'.' in this_id:
            return this_id
        return u'%s.%s' % (self._plugin_id, this_id)

    @property
    def name(self):
        """ Get the human readable name of the extension.

        """
        return self._data.get(u'name', u'')

    @property
    def description(self):
        """ Get the human readable description of the extension.

        """
        return self._data.get(u'description', u'')

    @property
    def cls(self):
        """ Get the path of the class which implements the extension.

        """
        return self._data.get(u'class', u'')

    @property
    def rank(self):
        """ Get the numeric rank of the extension.

        """
        return self._data.get(u'rank', 0)

    def has_property(self, name):
        """ Get whether the extension has a property.

        Parameters
        ----------
        name : unicode
            The name of the property of interest.

        Returns
        -------
        result : bool
            True if the extension has the named property. False
            otherwise.

        """
        return name in self._data

    def get_property(self, name, default=None):
        """ Get the named property from the extension.

        Parameters
        ----------
        name : unicode
            The name of the property of interest.

        default : object, optional
            The value to return if the property does not exist in
            the extension.

        Returns
        -------
        result : object
            The value for the named property.

        """
        return self._data.get(name, default)
