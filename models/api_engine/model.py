# -*- coding:utf-8 -*-

from .base import *


class User(Model):

    """
    email: user account
    passwd: user account passwd
    atime: added time
    """
    name = 'user'

    field = {
        'email': (str, ''),
        'passwd': (str, ''),
        'atime': (datetime, None),
    }


class Workspace(Model):

    """
    name: 工作区名称
    owner_id: 创建者 id
    """
    name = 'workspace'
    field = {
        'name': (str, ''),
        'owner_id': (ObjectId, None),
        'atime': (datetime, None),
        'uptime': (datetime, None),
    }


class Api(Model):
    """
    name: 名称
    workspace_id: 工作区
    """
    name = 'api'
    field = {
        'name': (str, ''),
        'workspace_id': (ObjectId, None),
        'atime': (datetime, None),
        'uptime': (datetime, None),
    }


class ApiGroup(Model):
    """
    name: 名称
    api_id: api
    """
    name = 'api_group'
    field = {
        'name': (str, ''),
        'atime': (datetime, None),
        'uptime': (datetime, None),
    }


class EndPoint(Model):
    """api end point
    name: 名称
    group_id: group
    method: 方法
    """
    name = 'end_point'
    field = {
        'name': (str, ''),
        'method': (str, ''),
        'atime': (datetime, None),
        'uptime': (datetime, None),
        'header': (list, []),
        'parameter': (list, []),
        'body': (str, ''),
        'form_body': (dict, {}),
        'json_body': (dict, {}),
    }


class DataModel(Model):

    """model
    name: 名称
    field: 字段
        type,name,required,default,$ref
    """
    field = {
        'name': (str, ''),
        'field': (dict, {}),
        'atime': (datetime, None),
        'uptime': (datetime, None),
    }
