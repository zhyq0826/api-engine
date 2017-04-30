import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [{
            'id': 1,
            'name': 'wallpaper',
            'description': 'wallpaper description',
            'create_time': '2013-10-11 10:11',
            'update_time': '2013-10-11 10:11'
        },{
            'id': 2,
            'name': 'ring',
            'description': 'wallpaper description',
            'create_time': '2013-10-11 10:11',
            'update_time': '2013-10-11 10:11'
        },{
            'id': 3,
            'name': 'food',
            'description': 'wallpaper description',
            'create_time': '2013-10-11 10:11',
            'update_time': '2013-10-11 10:11'
        },]
    }
});
