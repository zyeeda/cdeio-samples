var {mark}  = require('cdeio/mark');
var manager = require('cdeio/manager');

exports.createManager = function(){
    var personMgr,
        sql,
        query, person;

    sql = 'from Person p where p.id = :id';

    personMgr = manager.createManager();
    personMgr.mixin({
        getPersonById: function(em, id){
            query = em.createQuery(sql);
            query.setParameter('id', id);

            person = query.getSingleResult();

            return person;
        }
    });

    return personMgr;
};
