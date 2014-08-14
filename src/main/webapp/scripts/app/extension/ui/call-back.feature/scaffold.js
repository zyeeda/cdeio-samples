define([
    'jquery',
    'coala/core/loader-plugin-manager',
    'coala/core/util'
], function ($, LoaderManager, util) {
    return {
        //在添加、编辑页面时，点击确定按钮之后调的方法
        afterCloseDialog: function(dialogType, v, data) {
            app.success('into afterCloseDialog success');
        },
        //点击添加、编辑、查看按钮前调的方法
        beforeShowDialog: function(dialogType, v){
            app.success('into beforeShowDialog success');
            return true;
        },
        //点击添加、编辑、查看按钮后调的方法
        afterShowDialog: function(dialogType, v, data){
            app.success('into afterShowDialog success');
            //类别、明细之间的级联操作
            var smallDetailType= [
                    {id: '1', text: '小型1'},
                    {id: '2', text: '小型2'},
                    {id: '3', text: '小型3'}
                ],
                mediumDetailType= [
                    {id: '4', text: '中型1'},
                    {id: '5', text: '中型2'},
                    {id: '6', text: '中型3'}
                ],
                bigDetailType= [
                    {id: '7', text: '大型1'},
                    {id: '8', text: '大型2'},
                    {id: '9', text: '大型3'}
                ];
            if ('add' === dialogType) {
                util.changeDropdownData($('input[name="detailType"]'), smallDetailType);
            } else if ('edit' === dialogType) {
                if ('1' === data.type) {
                    util.changeDropdownData($('input[name="detailType"]'), smallDetailType);
                } else if ('2' === data.type) {
                    util.changeDropdownData($('input[name="detailType"]'), mediumDetailType);
                } else if ('3' === data.type) {
                    util.changeDropdownData($('input[name="detailType"]'), bigDetailType);
                }
            }
        },
        //在inline-grid中,点击按钮之前调的方法
        beforeShowInlineGridDialog: function(dialogType, view) {
            app.success('into beforeShowInlineGridDialog success');
            return true;
        },
        //在inline-grid中,点击按钮之后调的方法
        afterShowInlineGridDialog: function(dialogType, view, data) {
            app.success('into afterShowInlineGridDialog success');
            return true;
        },
        //验证inline-grid表单数据
        validInlineGridFormData: function(dialogType, view, data) {
            app.success('into validInlineGridFormData success');
            return true;
        },
        renderers: {
            modifyType: function(data) {
               var modifyTypeMap = {
                    '1': '小型',
                    '2': '中型',
                    '3': '大型'
                };
                return modifyTypeMap[data];
            },
            modifyDetailType: function(data) {
               var modifyDetailTypeMap = {
                    '1': '小型1',
                    '2': '小型2',
                    '3': '小型3',
                    '4': '中型1',
                    '5': '中型2',
                    '6': '中型3',
                    '7': '大型1',
                    '8': '大型2',
                    '9': '大型3'
                };
                return modifyDetailTypeMap[data];
            },
            modifyStatus: function(data) {
               var modifyStatusMap = {
                    '1': '好',
                    '2': '坏'
                };
                return modifyStatusMap[data];
            }
        },
        inlineGridPickerRenderers: {
            modifyStatus: function(data) {
               var modifyStatusMap = {
                    '1': '好',
                    '2': '坏'
                };
                return modifyStatusMap[data];
            }
        },
        handlers: {
            //点击删除按钮之前调的方法
            beforeDel: function (gridView, grid, selected) {
                app.success('into beforeDel success');
                return true;
            },
            //类别、明细之间的级联操作
            disableChange: function(view, selector) {
                app.success('into disableChange success');
                var smallDetailTypeData= [
                        {id: '1', text: '小型1'},
                        {id: '2', text: '小型2'},
                        {id: '3', text: '小型3'}
                    ],
                    mediumDetailTypeData= [
                        {id: '4', text: '中型1'},
                        {id: '5', text: '中型2'},
                        {id: '6', text: '中型3'}
                    ],
                    bigDetailTypeData= [
                        {id: '7', text: '大型1'},
                        {id: '8', text: '大型2'},
                        {id: '9', text: '大型3'}
                    ];
                if ('type' === selector.__options__.name) {
                    var type = selector.select2('data').id;
                    if ('1' === type) {
                        util.changeDropdownData($('input[name="detailType"]'), smallDetailTypeData);
                        $('input[name="detailType"]').select2('val', '1');
                    } else if ('2' === type) {
                        util.changeDropdownData($('input[name="detailType"]'), mediumDetailTypeData);
                        $('input[name="detailType"]').select2('val', '4');
                    } else if ('3' === type) {
                        util.changeDropdownData($('input[name="detailType"]'), bigDetailTypeData);
                        $('input[name="detailType"]').select2('val', '7');
                    }
                }
            },
            //表单字段改变时调的方法
            formStatusChanged: function(data, el){
                app.success('into formStatusChanged success');
            },
            //点击编辑页面后调的方法
            routerPickerCallback: function(view, data) {
                app.success('into routerPickerCallback success');
            },
            //点击picker选择数据之前调的方法
            beforeRouterPickerConfirm: function(view, data) {
                app.success('into beforeRouterPickerConfirm success');
                return true;
            },
            //点击picker选择数据之后调的方法
            afterRouterPickerConfirm: function (view, data) {
                app.success('into afterRouterPickerConfirm success');
            },
            //点击picker之前调的方法
            beforeShowRouterPicker: function (view) {
                app.success('into beforeRouterShowPicker success');
                return true;
            },
            //删除inline-grid数据之前
            beforeInlineGridRemove: function(grid, view){
                app.success('into beforeInlineGridRemove success');
                return true;
            },
            //删除inline-grid数据之后
            afterInlineGridRemove: function(grid, view){
                app.success('into afterInlineGridRemove success');
            },
             //点击编辑页面后调的方法
            basicPickerCallback: function(view, data) {
                app.success('into basicPickerCallback success');
            },
            //点击picker选择数据之前调的方法
            beforeBasicPickerConfirm: function(view, data) {
                app.success('into beforeBasicPickerConfirm success');
                return true;
            },
            //点击picker选择数据之后调的方法
            afterBasicPickerConfirm: function (view, data) {
                app.success('into afterBasicPickerConfirm success');
            },
            //点击picker之前调的方法
            beforeShowBasicPicker: function (view) {
                app.success('into beforeBasicShowPicker success');
                return true;
            }
        }
	};
});
