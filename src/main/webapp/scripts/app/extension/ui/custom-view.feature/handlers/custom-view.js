define({
    changeQuestion: function(e) {
        var id = $(e.currentTarget).attr('val'),
            hidInput = $('input[name="hidden-input"]'),
            questionId = $(hidInput).attr("questionId"),
            singleChoiceAnswers = [],
            answerContent = '',
            checkOptionIds = '';

        singleChoiceAnswers = $('input[type="radio"]:checked');
        if(singleChoiceAnswers.length > 0){
            checkOptionIds = $(singleChoiceAnswers[0]).val();
        }

        this.check_results[questionId].checkOptionIds = checkOptionIds;
        this.currentId = id;
        this.render();
    },
    changeToPreviousQuestion: function(e){
        var previousNumber, previousButtons, currentNumber;

        currentNumber = Number($(e.currentTarget).attr('number'));
        previousNumber = currentNumber - 1;
        previousButtons = $('button[index="'+previousNumber+'"]');

        if(previousButtons.length > 0){
            previousButtons[0].click();
        }else{
            //题目切换至第一题提示
            $.gritter.add({
                title: '提示',
                text: '已切换至第一题',
                class_name: 'gritter-info'
            });
        }
    },
    changeToNextQuestion: function(e){
        var nextNumber, nextButtons, currentNumber;

        currentNumber = Number($(e.currentTarget).attr('number'));
        nextNumber = currentNumber + 1;
        nextButtons = $('button[index="'+nextNumber+'"]');

        if(nextButtons.length > 0){
            nextButtons[0].click();
        }else{
            //题目切换至最后一题提示
            $.gritter.add({
                title: '提示',
                text: '已切换至最后一题',
                class_name: 'gritter-info'
            });
        }
    },
    submitAnswer: function(e){
        //成功提交试卷提示
        $.gritter.add({
         title: '提示',
         text: '提交试卷成功',
         class_name: 'gritter-success'
        });
    }
});

