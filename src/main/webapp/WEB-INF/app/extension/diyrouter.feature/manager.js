var {mark}          = require('coala/mark');

var {Person} = com.zyeeda.coala.example.extension.service.entity;

exports.createManager = function(){
    return {
        getManager: mark('managers', Person).on(function (personMgr, id) {
            var sql,
                query, person;

            sql = 'from Person p where p.id = :id';

            personMgr.mixin({
                getPersonById: function(em){
                    query = em.createQuery(sql);
                    query.setParameter('id', id);

                    person = query.getSingleResult();

                    return person;
                }
            });
            return personMgr;
        })
    };
};
