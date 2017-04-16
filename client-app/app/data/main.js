const orgs = [
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
];

const projects = [
    {"id":11269206,"name":"tornado-asyn","owner_name":"zhyq0826","description":"tornado 中的异步","active":null,"private":false,"admin":true},
    {"id":10498860,"name":"docker-about","owner_name":"zhyq0826","description":"about docker ","active":null,"private":false,"admin":true},
    {"id":10234094,"name":"let-us-code","owner_name":"zhyq0826","description":"let us code to solve problem","active":null,"private":false,"admin":true},
    {"id":10056116,"name":"weixinpay","owner_name":"zhyq0826","description":"微信支付-Python","active":null,"private":false,"admin":true},
    {"id":9530558,"name":"python-network-cookbook","owner_name":"zhyq0826","description":"python network programming cookbook code","active":null,"private":false,"admin":true},
    {"id":7618044,"name":"hexo-theme-apollo","owner_name":"zhyq0826","description":"A hexo theme inspired by vuejs.org.","active":null,"private":false,"admin":true},
    {"id":7618046,"name":"hexo-themes-cover","owner_name":"zhyq0826","description":"my blog theme, fork from daisygao/hexo-themes-cover","active":null,"private":false,"admin":true},
    {"id":7618043,"name":"es6tutorial","owner_name":"zhyq0826","description":"《ECMAScript 6入门》是一本开源的JavaScript语言教程，全面介绍ECMAScript 6新增的语法特性。","active":null,"private":false,"admin":true},
    {"id":7618039,"name":"doc","owner_name":"zhyq0826","description":"my doc about everything","active":null,"private":false,"admin":true},
    {"id":7618036,"name":"computer-science-in-javascript","owner_name":"zhyq0826","description":"Collection of classic computer science paradigms, algorithms, and approaches written in JavaScript. ","active":null,"private":false,"admin":true},
    {"id":8858760,"name":"blog-code","owner_name":"zhyq0826","description":"code for blog","active":null,"private":false,"admin":true},
    {"id":8848741,"name":"Qix","owner_name":"zhyq0826","description":"Machine Learning、Deep Learning、PostgreSQL、Distributed System、Node.Js、Golang","active":null,"private":false,"admin":true},
    {"id":8535371,"name":"al4","owner_name":"zhyq0826","description":"algorithms four edition","active":null,"private":false,"admin":true},
    {"id":8192856,"name":"tinman","owner_name":"zhyq0826","description":"Tinman is a Tornado support package including an application wrapper/runner and a set of handy decorators.","active":null,"private":false,"admin":true},
    {"id":8180284,"name":"croniter","owner_name":"zhyq0826","description":"croniter is a python module to provide iteration for datetime object.","active":null,"private":false,"admin":true},
    {"id":8146670,"name":"ansible-users","owner_name":"zhyq0826","description":"Ansible user creation role","active":null,"private":false,"admin":true},
    {"id":8146665,"name":"ansible-sudoers","owner_name":"zhyq0826","description":"Simple sudoers role for Ansible","active":null,"private":false,"admin":true},
    {"id":8146663,"name":"ansible-examples","owner_name":"zhyq0826","description":"A few starter examples of ansible playbooks, to show features and how they work together.  See http://galaxy.ansible.com for example roles from the Ansible community for deploying many popular applications.","active":null,"private":false,"admin":true},
    {"id":7618071,"name":"zhyq0826.github.io","owner_name":"zhyq0826","description":"三月沙的博客","active":null,"private":false,"admin":true},
    {"id":7618069,"name":"twisted-intro","owner_name":"zhyq0826","description":"Source files used for an introduction to Twisted","active":null,"private":false,"admin":true},
    {"id":7618065,"name":"test-lab","owner_name":"zhyq0826","description":"test lab","active":null,"private":false,"admin":true},
    {"id":7618059,"name":"shadowsocks-gui","owner_name":"zhyq0826","description":"Shadowsocks GUI client","active":null,"private":false,"admin":true},
    {"id":7618058,"name":"python-lib","owner_name":"zhyq0826","description":"python useful tool","active":null,"private":false,"admin":true},
    {"id":7618057,"name":"pyprocessing","owner_name":"zhyq0826","description":"fork from http://code.google.com/p/pyprocessing/","active":null,"private":false,"admin":true},
    {"id":7618056,"name":"pycrumbs","owner_name":"zhyq0826","description":"Bits and bytes of Python from the Internet","active":null,"private":false,"admin":true},
    {"id":7618054,"name":"oauth2app","owner_name":"zhyq0826","description":"Django OAuth 2.0 Server App. Please fork and improve!","active":null,"private":false,"admin":true},
    {"id":7618053,"name":"linux-sysadmin-interview-questions","owner_name":"zhyq0826","description":"Collection of linux sysadmin/devop interview questions","active":null,"private":false,"admin":true},
    {"id":7618052,"name":"linkus-django","owner_name":"zhyq0826","description":"linkus：django 1.3.3版，mysql 5.1版","active":null,"private":false,"admin":true},
    {"id":7618051,"name":"lab","owner_name":"zhyq0826","description":"all lab","active":null,"private":false,"admin":true},
    {"id":7618050,"name":"javascript-lib","owner_name":"zhyq0826","description":null,"active":null,"private":false,"admin":true},
    {"id":7618048,"name":"Instagram-Filters","owner_name":"zhyq0826","description":"Instagram filters hacked and open sourced. Supports both photo and video.","active":null,"private":false,"admin":true},
    {"id":7618045,"name":"hexo-theme-casper","owner_name":"zhyq0826","description":"Ghost Casper hexo port","active":null,"private":false,"admin":true},
    {"id":7618037,"name":"design","owner_name":"zhyq0826","description":"about my design","active":null,"private":false,"admin":true}
];

const teams = [
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
    }
];

export {
    orgs,
    projects,
    teams
}