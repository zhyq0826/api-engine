
import redis
from turbo import session


class SessionStore(session.RedisStore):

    conn = redis.Redis(host='localhost', port=6379, db=0)

    def get_connection(self, key):
        return self.conn


class SessionObject(session.CookieObject):

    def generate_session_id(self):
        _id = super(SessionObject, self).generate_session_id()
        return 'session:%s'%_id