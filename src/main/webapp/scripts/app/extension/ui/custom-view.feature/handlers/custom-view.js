define({
	submitBtn: function(e){
        var data = this.model.toJSON(),
            radio = $('input[type="radio"]:checked'),
            index;
        if (radio.length > 0) {
            for (var i = 0; i < data.results.length; i++) {
                if ($(radio[0]).val() === data.results[i].id) {
                    index = data.results[i].index;
                }
            }
            $.gritter.add({
                title: '提示',
                text: '序号' + index + '被选中',
                class_name: 'gritter-info'
            });
        }
	}
});
