import Ember from 'ember';

export default Ember.Route.extend({
    model(param){
        return {
            "id":11269206,
            "name":"tornado-asyn",
            "owner_name":"zhyq0826",
            "description":"tornado 中的异步",
            "active":null,
            "private":false,
            "admin":true
        };
    }
});
