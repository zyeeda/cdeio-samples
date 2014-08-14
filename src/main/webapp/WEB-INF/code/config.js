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
    'extension/service/advance': {
        webinf: [
            {name: '自定义router ', path: 'extension/diyrouter.feature/router.js'},
            {name: '相关其它service', path: 'extension/diyrouter.feature/service.js'},
            {name: '相关其它manager', path: 'extension/diyrouter.feature/manager.js'},
        ]
    },
    'extension/ui/form': {
        webinf: [
            {name: '树的数据源', path: 'test/trees.feature/scaffold.js'}
        ]
    }
};
