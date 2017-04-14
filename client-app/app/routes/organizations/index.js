import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [
            {
                'name': 'wecatch',
                'id': 1,
                'description': 'wecatch orgnazition'
            },
            {
                'name': 'emberjs-china',
                'id': 2,
                'description': 'emberjs-china orgnazition'
            },
            {
                'name': 'androidesk',
                'id': 3,
                'description': 'androidesk orgnazition'
            },
            {
                'name': 'team-report',
                'id': 4,
                'description': 'team-report orgnazition'
            },
        ]
    }
});
