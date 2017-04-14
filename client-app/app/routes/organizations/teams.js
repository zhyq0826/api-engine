import Ember from 'ember';

export default Ember.Route.extend({
    cache: Ember.inject.service()
    model(){
        return [
            {
                'name': 'api',
                'id': 1,
                'description': 'wecatch team'
            },
            {
                'name': 'devops',
                'id': 2,
                'description': 'emberjs-china team'
            },
            {
                'name': 'analysis',
                'id': 3,
                'description': 'androidesk team'
            },
        ]
    }
});
