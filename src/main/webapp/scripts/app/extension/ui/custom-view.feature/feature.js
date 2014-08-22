define(['jquery', 'underscore'], function($, _) {
    return {
        layout: {
            regions: {
                customView: 'custom-view'
            }
        },
        views: [{
            name: 'inline:custom-view',
            region: 'customView',
            model: 'extension/ui/basic',
            events: {
                'click btn-*': 'changeQuestion',
                'click changeToPreviousBtn': 'changeToPreviousQuestion',
                'click changeToNextBtn': 'changeToNextQuestion',
                'click submitAnswerBtn': 'submitAnswer'
            },
            extend: {
                serializeData: function(_super) {
                    var deferred = $.Deferred(),
                        m = this.model,
                        data = _super.apply(this),
                        check_results = {},
                        rowList = [],
                        areaList = [],
                        groupList = [],
                        noQuestionFlag,
                        submitAnswerBtnClass;

                    var currentId = this.currentId;
                    if(currentId){
                        check_results = this.check_results;
                    }
                    m.fetch().done(function() {
                        //var results = m.toJSON().results;
                        var results = [{ id: "8a8181a547f62b240147f671a5b40000", name: "第一题", description: "第一题内容"}, { id: "8a8181a547f62b240147f671ba8b0001", name: "第二题", description: "第二题内容"}];
                            length = results.length;

                        $.each(results, function (i, v){
                            v.index = i + 1;
                            if(!check_results[v.id]){
                                check_results[v.id] = v;
                            }else{
                                if(check_results[v.id].checkOptionIds){
                                    var checkOptionIdArr = check_results[v.id].checkOptionIds.split(','),
                                        checkedOptionsCodeArr = [];

                                    $.each(checkOptionIdArr, function(i1, v1){
                                        checkedOptionsCodeArr.push("A");
                                    });

                                    //以绿色按钮标记已选择答案的题目
                                    v.hasAnswerClass = 'btn-success';
                                    v.tooltipContent = '此题选择的答案为:' + checkedOptionsCodeArr.join(',');
                                }else{
                                    v.tooltipContent = '';
                                    v.hasAnswerClass = '';
                                }
                            }
                            //按钮排版要求
                            groupList.push(v);
                            if(i === length - 1){
                                areaList.push({groupList: groupList});
                                rowList.push({areaList: areaList});
                            }else if(groupList.length === 5){
                                areaList.push({groupList: groupList});
                                groupList = [];
                                if(areaList.length === 4){
                                    rowList.push({areaList: areaList});
                                    areaList = [];
                                }
                            }
                            //为当前选中的数据增加字段标识
                            if(v.id === currentId){
                                v.currId = currentId;
                            }else{
                                v.currId = null;
                            }

                            //如果没有选中数据，则为第一个数据增加字段标识
                            if (!currentId) {
                                if(i === 0){
                                    v.currId = v.id;
                                }
                            }
                        });

                        data.rowList = rowList;

                        if(results.length > 0){
                            if (currentId) {
                                var question = null;

                                $.each(results, function (i, v){
                                    v.index = i + 1;
                                    if(v.id === currentId){
                                        question = v;
                                        return false;
                                    }
                                });
                                data.info = question;
                            } else {
                                data.info = results[0];
                            }
                        }

                        data.results = results;

                        if(this.submited){
                            submitAnswerBtnClass = 'disabled';
                        }else{
                            submitAnswerBtnClass = 'btn-danger';
                        }

                        data.submitAnswerBtnClass = submitAnswerBtnClass;
                        deferred.resolve(data);

                        if(m.toJSON().results.length === 0){
                             //没有可以操作的题目提示
                            $.gritter.add({
                                title: '提示',
                                text: '没有可以回答的题目，如有疑问，请联系系统管理员',
                                class_name: 'gritter-error'
                            });
                            return true;
                        }
                        return false;
                    });

                    this.check_results = check_results;
                    return deferred.promise();
                },
                afterRender: function(su) {
                    $('.se-question-other-number').tooltip();
                    return su.apply(this);
                }
            }
        }]
    };
});
