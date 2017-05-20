# -*- coding:utf-8 -*-

from db.mongo_conn import (
    api_engine as _api_engine,
)

MONGO_DB_MAPPING = {
    'db': {
        'api_engine': _api_engine,
    },
    'db_file': {
    }
}
