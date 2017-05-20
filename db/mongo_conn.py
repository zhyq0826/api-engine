# -*- coding:utf-8 -*-

import os

import gridfs
from pymongo import MongoClient, MongoReplicaSetClient, read_preferences

from . import setting

mc = MongoClient(host='localhost')

# user
api_engine = mc['api-engine']
