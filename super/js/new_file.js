//微信ID文本输入框宽度设置
	$('#main #id #id-bot .id-i').width($('#main #id #id-top').width()* 0.97);
	
//微信昵称文本输入框宽度
	$('#fname .fname-i .fname-in').width($('#fname .fname-i').width()*0.5);
	$('#fname .fname-i .fname-inp').width($('#fname .fname-i').width()*0.3);

	$('#main #fname .fname-inp').on('click',function () {
		alert('这个不会啊！');
	})

//姓名输入框宽度

	$('#name #name-bot input').width($('#name #name-top').width()*0.83)

//上传头像

    $(function () {

        // 设置头像的高度等于宽度
        $('#header-img').height($('#header-img').width());

        // 实现拖放图片上传
        $('#upload-btn').on('dragenter', function () {
            $(this).css({ backgroundColor: 'rgb(100, 134, 107)' });
        }).on('dragover', function (e) {
            // e.preventDefault();
            return false;
        }).on('dragleave', function () {
            $(this).css({ backgroundColor: 'transparent' });
        }).on('drop', function (e) {
            $(this).css({ backgroundColor: 'transparent' });
            // 获取拖入的文件
            var file = e.originalEvent.dataTransfer.files[0];
            handleFile(file);
            console.log(file);
            return false;
        });

        // 处理按钮的点击事件
        $('#file-input').change(function () {
            var file = this.files[0];
//          console.log(this.files);
            handleFile(file);
        });
        $('#upload-btn').on('click', function () {
            $('#file-input').click();
        });


        // 处理file对象
        function handleFile(file) {
            // 处理文件类型
            var res = /^image\//.test(file.type);
         
            if (!res) { // 假
                $('.error-info').show();
                return;
            }

            $('.error-info').hide();
            // 需要fileReader对象
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                // e.target.result
                var data = e.target.result;
                $('#header-img').attr({
                    src: data
                });
            };
            fileReader.readAsDataURL(file);
        }
    });


$('#sub').on('click',function() {
	alert('提交成功')
})