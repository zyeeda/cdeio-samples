exports.docs = {
    'entity/test': {
        java: 'com/zyeeda/coala/example/entity/entity/Test.java'
    },
    'entity/foo': {
        java: 'com/zyeeda/coala/example/entity/entity/Foo.java'
    },
    'entity/bar': {
        java: 'com/zyeeda/coala/example/entity/entity/Bar.java'
    },
    'generate/bpm/task/userTask': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/task/Employee4UserTask.java',
        bpmn: 'example-generate-bpm-task-userTask'
    },
    'generate/bpm/task/callback': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/task/Employee4Callback.java',
        bpmn: 'example-generate-bpm-task-callback'
    },
    'generate/bpm/task/reject': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/task/Employee4Reject.java',
        bpmn: 'example-generate-bpm-task-reject'
    },
    'generate/bpm/gateway/exclusive': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/gateway/Employee4Exclusive.java',
        bpmn: 'example-generate-bpm-gateway-exclusive'
    },
    'generate/bpm/gateway/parallel': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/gateway/Employee4Parallel.java',
        bpmn: 'example-generate-bpm-gateway-parallel'
    },
    'generate/bpm/listener/execution': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/listener/Employee4Execution.java',
        bpmn: 'example-generate-bpm-listener-execution',
        javas: [
            {name: '监听父类', path: 'com/zyeeda/coala/example/listener/generate/bpm/listener/BaseBpmListener.java'},
            {name: '流程监听', path: 'com/zyeeda/coala/example/listener/generate/bpm/listener/execution/ProcessExecutionListener.java'}
        ]
    },
    'generate/bpm/listener/task': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/listener/Employee4Task.java',
        bpmn: 'example-generate-bpm-listener-task',
        javas: [
            {name: '监听父类', path: 'com/zyeeda/coala/example/listener/generate/bpm/listener/BaseBpmListener.java'},
            {name: '任务分派监听', path: 'com/zyeeda/coala/example/listener/generate/bpm/listener/task/TaskAssignmentListener.java'},
            {name: '任务自动认领监听', path: 'com/zyeeda/coala/example/listener/generate/bpm/listener/task/TaskAutoClaimListener.java'},
            {name: '任务完成监听', path: 'com/zyeeda/coala/example/listener/generate/bpm/listener/task/TaskCompleteListener.java'},
            {name: '任务创建监听', path: 'com/zyeeda/coala/example/listener/generate/bpm/listener/task/TaskCreateListener.java'}
        ]
    },
    'generate/bpm/subprocess/embedded': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/subprocess/Employee4Embedded.java',
        bpmn: 'example-generate-bpm-subprocess-embedded'
    },
    'generate/bpm/multiple/subprocess': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/multiple/Plan4Subprocess.java',
        bpmn: 'example-generate-bpm-multiple-subprocess',
        javas: [
            {name: '多实例子流程服务接口', path: 'com/zyeeda/coala/example/service/generate/bpm/multiple/MultipleSubprocessService.java'},
            {name: '多实例子流程服务实现', path: 'com/zyeeda/coala/example/service/generate/bpm/multiple/impl/MultipleSubprocessServiceImpl.java'}
        ]
    },
    'generate/bpm/multiple/userTask': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/multiple/Plan4UserTask.java',
        bpmn: 'example-generate-bpm-multiple-userTask',
        javas: [
            {name: '多实例人工任务服务接口', path: 'com/zyeeda/coala/example/service/generate/bpm/multiple/MultipleUserTaskService.java'},
            {name: '多实例人工任务服务实现', path: 'com/zyeeda/coala/example/service/generate/bpm/multiple/impl/MultipleUserTaskServiceImpl.java'}
        ]
    },
    'extension/service/basic': {
        java: 'com/zyeeda/coala/example/extension/service/entity/Person.java',
        webinf: [
            {name: '自定义router ', path: 'extension/diyrouter.feature/router.js'},
            {name: '自定义service', path: 'extension/diyrouter.feature/service.js'},
            {name: '自定义manager', path: 'extension/diyrouter.feature/manager.js'},
        ]
    },
    'extension/service/sqlquery': {
        java: 'com/zyeeda/coala/example/extension/service/entity/Task.java'
    },
    'extension/service/downloadfile': {
        java: 'com/zyeeda/coala/example/extension/service/entity/DataFile.java'
    },
    'extension/service/uploadfile': {
        java: 'com/zyeeda/coala/example/extension/service/entity/DataFile.java'
    },
    'extension/ui/form': {
        webinf: [
            {name: '树的数据源', path: 'test/trees.feature/scaffold.js'}
        ]
    },
    'extension/ui/basic': {
        java: 'com/zyeeda/coala/example/extension/ui/form/entity/UiBasic.java'
    },
    'extension/ui/custom-form': {
        java: 'com/zyeeda/coala/example/extension/ui/form/entity/CustomForm.java'
    },
    'scaffold/basic/basic-todo': {
        java: 'com/zyeeda/coala/example/scaffold/basic/entity/BasicTodo.java'
    },
    'extension/ui/call-back': {
        java: 'com/zyeeda/coala/example/extension/ui/form/entity/Callback.java'
    },
    'scaffold/basic/todo': {
        java: 'com/zyeeda/coala/example/scaffold/basic/entity/Todo.java'
    },
    'scaffold/basic/tag': {
        java: 'com/zyeeda/coala/example/scaffold/basic/entity/Tag.java'
    },
    'scaffold/grid/todo': {
        java: 'com/zyeeda/coala/example/scaffold/grid/entity/GridTodo.java'
    },
    'scaffold/grid/grid-user': {
        java: 'com/zyeeda/coala/example/scaffold/grid/entity/GridUser.java'
    },
    'scaffold/grid/user': {
        java: 'com/zyeeda/coala/example/scaffold/grid/entity/seniorGridUser.java'
    },
    'scaffold/field/todo': {
        java: 'com/zyeeda/coala/example/scaffold/field/entity/FieldTodo.java'
    },
    'scaffold/field/account': {
        java: 'com/zyeeda/coala/example/scaffold/field/entity/FieldAccount.java'
    },
    'scaffold/form/project': {
        java: 'com/zyeeda/coala/example/scaffold/form/entity/FormProject.java'
    },
    'scaffold/form/todo': {
        java: 'com/zyeeda/coala/example/scaffold/form/entity/FormTodo.java'
    },
    'scaffold/form/user': {
        java: 'com/zyeeda/coala/example/scaffold/form/entity/FormUser.java'
    },
    'scaffold/hooks/todo': {
        java: 'com/zyeeda/coala/example/scaffold/hooks/entity/HooksTodo.java'
    },
    'scaffold/validators/user': {
        java: 'com/zyeeda/coala/example/scaffold/validators/entity/ValidatorsUser.java'
    },
    'scaffold/tree/basic': {
        java: 'com/zyeeda/coala/example/scaffold/tree/entity/BasicTree.java'
    },
    'scaffold/button/basic': {
        java: 'com/zyeeda/coala/example/scaffold/button/entity/OperateButton.java'
    },
    'extension/tree/icon': {
        java: 'com/zyeeda/coala/example/extension/tree/entity/AdvancedTree.java'
    },
    'extension/tree/event': {
        java: 'com/zyeeda/coala/example/extension/tree/entity/AdvancedTree.java'
    }
};
