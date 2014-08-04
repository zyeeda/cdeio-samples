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
        bpmn: 'example-generate-bpm-listener-execution'
    },
    'generate/bpm/listener/task': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/listener/Employee4Task.java',
        bpmn: 'example-generate-bpm-listener-task'
    },
    'generate/bpm/subprocess/embedded': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/subprocess/Employee4Embedded.java',
        bpmn: 'example-generate-bpm-subprocess-embedded'
    },
    'generate/bpm/multiple/subprocess': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/multiple/Plan4Subprocess.java',
        bpmn: 'example-generate-bpm-multiple-subprocess'
    },
    'generate/bpm/multiple/userTask': {
        java: 'com/zyeeda/coala/example/entity/generate/bpm/multiple/Plan4UserTask.java',
        bpmn: 'example-generate-bpm-multiple-userTask'
    },
    'extension/ui/form': {
        webinf: [
            {name: '树的数据源', path: 'test/trees.feature/scaffold.js'}
        ]
    }
};
